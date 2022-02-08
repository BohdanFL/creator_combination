const isRepeat = () => {
	let repeatNum = 0
	let elemsList = elementsList.childNodes
	const repeatElems = []
	const ignoreList = []

	for (let n = 0; n < elemsList.length; n++) {
		let addFirstElem = true;
		const elemName = elemsList[n].querySelector('.elements__item-text')
		const elemNameText = elemName.textContent.trim()
		// console.log(elemName, elemNameText)
		const isWas = ignoreList.indexOf(elemNameText)
		if (!ignoreList[isWas]) {
			elemsList.forEach((i, nI) => {
				const newElemName = elemsList[nI].querySelector('.elements__item-text')
				const newElemNameText = newElemName.textContent.trim()
				if (elemNameText && newElemNameText) {
					if (n < nI) {
						if (elemNameText === newElemNameText) {
							let ignoreListNotRepeat = true
							ignoreList.forEach(ignoreItem => {
								if (ignoreItem === elemNameText) {
									ignoreListNotRepeat = false
								}
							})
							if (ignoreListNotRepeat) {
								ignoreList.push(elemNameText)
							}
							repeatNum++
							if (addFirstElem) {
								repeatElems.push(elemName)
								addFirstElem = false;
							}
							repeatElems.push(newElemName)
						}
					}
				}
			});
		}
	}

	return {
		repeatElems,
		repeatNum,
		isRepeatBool: !!repeatNum
	}
}

const createElemNums = (arr) => {
	elemNums = arr.map((_, n) => n)

	arr.forEach((i, n) => {
		let repeat = -1
		elementsList.childNodes.forEach((i2) => {
			const itemNameText = i2.querySelector('.elements__item-text').textContent.trim()
			if (itemNameText === i) {
				// console.log(itemNameText)
				repeat++
				if (!repeat > 0) {
					if (elemNums.indexOf(n) >= 0) {
						elemNums.splice(elemNums.indexOf(n), 1)
					}
				}
			}
		});
	})
	return elemNums
}

const checkRepetition = (numIterate, elem, checkElems, change) => {
	return new Promise(resolve => {
		let repeat = 0
		let elemsList = elementsList.childNodes
		// console.log((elem))
		iterate(numIterate, elem, newDataElemsE, checkElems, change, false).then(only => {

			elemsList.forEach((i, n) => {
				i = i.querySelector('.elements__item-text').textContent.trim()
				if (i && only === i) repeat++
			});
			resolve(repeat)
		})
	}).then((repeat) => {
		if (repeat > 1) {
			createNewDataElems(32, elem, checkElems)
		} else clearAndSave()
	})
}

const createNewDataElems = (numIterate = 1, elem, checkElems = dataElems.e, change = false) => {
	return new Promise((resolve, reject) => {
		elem = elem.querySelector('.elements__item-text') || elem
		if (checkElems.length === elementsList.childElementCount) {
			elemNums = checkElems.map((_, n) => n)
		} else createElemNums(checkElems)

		newDataElemsE = [];
		if (elemNums.length) {
			elemNums.forEach(i => newDataElemsE.push(checkElems[i]))

			if (elem) checkRepetition(numIterate, elem, checkElems).then(resolve)
			return
		}
		createPopup("Неможливо замінити на унікальний елемент!", 200, 3000)
		setTimeout(resolve, 3200);
	})
}

const iterate = (i, elem, array, iterableArr = array, change = false, save = true, duration = 30, only) => {
	return new Promise((resolve) => {

		elem.name = elem.querySelector(".elements__item-text") || elem
		if (!i || !elem.name.textContent || !array) return

		const interval = setInterval(() => {
			if (i === 1 || i === 32) {
				only = random(array)
			}
			i++;
			elem.name.textContent = random(iterableArr)
			sortable.destroy()

			if (i > 10) {
				clearInterval(interval);

				const isJump = !!dataElems.j.find(i => i === elem.name.textContent.trim())
				if (isJump) {
					elem.closest(".elements__item").classList.add("jump")
				}

				if (!change) {
					elem.name.textContent = only
					elems.push(elem.name.textContent.trim())
				} else {
					const findText = elem.name.textContent
					for (const key in elementsList.children) {
						let child = elementsList.children[key]
						if (typeof child === "object") {
							child = child.querySelector('.elements__item-text')
							if (child.textContent.trim() === findText) {
								// console.log(elems)
								elems.splice(key, 1, findText)
								// console.log(elems)
							}
						}
					}
				}

				sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('sortable:stop', updateListOnMove);
				sortable.on('drag:start', hideContextMenuOnDrag)
				sortable.on('sortable:sort', smoothEnabled);
				sortable.on('drag:stopped', smoothDisabled);
				if (save) {
					localStorage.setItem('elems', JSON.stringify(elems))
				}

				resolve(only);
			}
		}, duration);
	});
}

const setLimit = (elemsLength, repeatEnable, jumpEnable, arr, arrLength, potentialItemCount) => {

}

const addRandomElem = () => {
	const elemsLength = elementsList.children.length
	const countValue = parseInt(countEnableBtn.value)

	const repeatEnable = repeatElemBtn.checked
	const jumpEnable = randomJumpEnableBtn.checked
	const sumElem = elemsLength + parseInt(countEnableBtn.value)

	let arr = dataElems.e
	const potentialItemCount = elemsLength + countValue
	let arrLength = arr.length

	const lastItem = elementsList.querySelector(".elements__item:last-child .elements__item-text")
	const isLastJump = !!dataElems.j.find(i => lastItem ? i === lastItem.textContent : false)
	// Деактивовує активований сейв
	addSelectorInListItem(saveList, null, "active")

	if (!repeatEnable) {
		if (elemsLength >= 99) {
			createPopup('Ви досягли ліміту елементів (99)', 200, 3000)
			return
		} else {
			if (countEnableBtn.value > 99 || sumElem > 99) {
				createPopup('Дія неможлива, ліміт елементів (99)', 200, 3000)
			}
		}
		if (elemsLength >= 99 || countEnableBtn.value > 99 || sumElem > 99) {
			countEnableBtn.value = (99 - elemsLength) || 1
			return
		}
	}

	createElemNums(arr)
	if (repeatEnable) {
		if (jumpEnable) {
			arrLength = arr.length + 1
		}
		if (potentialItemCount > arr.length && !elemNums.length) {
			countEnableBtn.value = (arr.length - elemsLength) <= 0 ? 1 : arrLength - elemsLength
		}
	}

	createElemNums(arr)
	for (let i = 0; i < countValue; i++) {
		if (jumpEnable && !isLastJump) {
			if (i === (countValue - 1)) {
				arr = dataElems.j
			}
		}
		arrLength = arr.length
		if (jumpEnable) {
			arrLength = arrLength + 1
		}

		if (repeatEnable) {
			if (potentialItemCount > arrLength) {
				createPopup("Неможливо створити таку кількість унікальних елементів!", 200, 3000)
				i = countValue
			} else {
				createNewDataElems(1, createLi('', isLastJump, lastItem), arr)
			}
		} else {
			iterate(1, createLi('', isLastJump, lastItem), arr)
		}
	}

	elementsList.scrollTo({
		behavior: "smooth",
		left: 0,
		top: elementsList.scrollHeight
	})
	options.count = countEnableBtn.value
	localStorage.setItem("options", JSON.stringify(options))
}

const preCheckRepetions = () => {
	let repeatEnable = repeatElemBtn.checked
	if (repeatEnable) {
		if (createElemNums(dataElems.e).length || (dataElems.e.length == elementsList.children.length)) {
			popupCheckRepeations()
			return
		}

		createPopup("Неможливо замінити на унікальний елемент!", 200, 3000)
		setTimeout(clearStyle, 3000)
	}
}