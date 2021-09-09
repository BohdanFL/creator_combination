const isRepeat = () => {
	let repeatNum = 0
	let elem = elementsList.childNodes
	const repeatElems = []
	const ignoreList = []

	for (let n = 0; n < elem.length; n++) {
		let addFirstElem = true;
		const isWas = ignoreList.indexOf(elem[n].textContent.trim())
		if (!ignoreList[isWas]) {
			elem.forEach((i, nI) => {
				if (elem[n].textContent.trim() && elem[nI].textContent.trim()) {
					if (n < nI) {
						if (elem[n].textContent.trim() === elem[nI].textContent.trim()) {
							let ignoreListNotRepeat = true
							ignoreList.forEach(ignoreItem => {
								if (ignoreItem === elem[n].textContent.trim()) {
									ignoreListNotRepeat = false
								}
							})
							if (ignoreListNotRepeat) {
								ignoreList.push(elem[n].textContent.trim())
							}
							repeatNum++
							if (addFirstElem) {
								repeatElems.push(elem[n])
								addFirstElem = false;
							}
							repeatElems.push(elem[nI])
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
	elemNums = [];
	arr.forEach((_, n) => elemNums.push(n))
	arr.forEach((i, n) => {
		let repeat = -1
		elementsList.childNodes.forEach((i2) => {
			if (i2.textContent.trim() === i) {
				repeat++
				if (!repeat > 0) {
					elemNums.splice(elemNums.indexOf(n), 1)
				}
			}
		});
	})
	return elemNums
}

const checkRepetition = (numIterate, changingElem, checkElems) => {
	return new Promise(resolve => {
		let repeat = 0
		let elem = elementsList.childNodes
		if (changingElem) {
			iterate(numIterate, changingElem, newDataElemsE, checkElems, false, false).then(only => {
				elem.forEach((i) => {
					if (i.textContent.trim()) {
						if (only === i.textContent.trim()) {
							repeat++
						}
					}
				});
				resolve(repeat)
			})
		}
	}).then((repeat) => {
		if (repeat > 1) {
			createNewDataElems(32, changingElem, checkElems)
		} else {
			console.log("finish")
			clearAndSaveElems()
			if (changeAllBtn.disabled) {
				changeAllBtn.disabled = false
				changeAllBtn.textContent = "Change All"
			}
		}
	})
}

const createNewDataElems = (numIterate = 1, changingElem, checkElems = dataElems.e, createItem = false) => {
	return new Promise(resolve => {
		let jumpEnable
		enableOptions ? jumpEnable = jumpEnableBtn.checked : jumpEnable = false
		createElemNums(checkElems)
		newDataElemsE = [];
		if (elemNums.length) {
			elemNums.forEach(i => {
				newDataElemsE.push(checkElems[i])
			})
			if (createItem) {
				createLi('')
				changingElem = elementsList.querySelector(".elements__item:last-child .elements__item-text")
			}
			checkRepetition(numIterate, changingElem, checkElems).then(() => {
				resolve()
			})

		} else if (checkElems.length < elementsList.children.length && !jumpEnable) {
			createTitle("Неможливо замінити на унікальний елемент!", 200, 3000)
			setTimeout(() => {
				resolve()
			}, 3000);
		} else if (checkElems.length == elementsList.children.length) {
			checkElems.forEach(i => newDataElemsE.push(i))
			checkRepetition(numIterate, changingElem, checkElems).then(() => {
				resolve()
			})
		} else {
			createTitle("Неможливо замінити на унікальний елемент!", 200, 3000)
			setTimeout(() => {
				resolve()
			}, 3000);
		}
	})
}

const iterate = (i, elem, array, iterableArr = array, change = false, save = true, duration = 30, only) => {
	// const iterate = (i, opt) => {
	return new Promise((resolve) => {
		const interval = setInterval(() => {
			if (i === 1 || i === 32) {
				only = array[random(array)];
				console.log("iterate");
			}
			i++;
			elem.textContent = iterableArr[random(iterableArr)]
			sortable.destroy()

			if (i > 10) {
				clearInterval(interval);

				if (!change) {
					elem.textContent = only
					elems.push(elem.textContent)
				} else {
					const findText = elem.textContent
					for (const key in elementsList.children) {
						const elem = elementsList.children[key];
						if (typeof elem === "object") {
							if (elem.textContent.trim() === findText) {
								elems.splice(key, 1, findText)
							}
						}
					}
				}

				sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('drag:stopped', clearAndSaveElems);
				sortable.on('sortable:sort', smoothEnabled);
				sortable.on('drag:stopped', smoothDisabled);
				if (save) {
					localStorage.setItem('saveElems', JSON.stringify(elems))
				}

				resolve(only);
			}
		}, duration);
	});
}

const addRandomElem = (dataElems) => {
	const elemsLength = elementsList.children.length
	const sumElem = elemsLength + parseInt(countEnableBtn.value)
	let repeatEnable, countValue, jumpEnable
	enableOptions ? repeatEnable = repeatElemBtn.checked : repeatEnable = false
	if (!repeatEnable) {
		if (elemsLength >= 99) {
			createTitle('Ви досягли ліміту елементів (99)', 200, 3000)
		} else {
			if (enableOptions) {
				if (countEnableBtn.value > 99 || sumElem > 99) {
					createTitle('Дія неможлива, ліміт елементів (99)', 200, 3000)
				}
			}
		}
		if (elemsLength >= 99 || countEnableBtn.value > 99 || sumElem > 99) {
			if (enableOptions) {
				countEnableBtn.value = (99 - elemsLength) || 1
			}
			return
		}
	}

	enableOptions ? countValue = parseInt(countEnableBtn.value) : countValue = 1
	enableOptions ? jumpEnable = jumpEnableBtn.checked : jumpEnable = false
	let arr = dataElems.e
	let potentialItemCount = elemsLength + countValue
	let arrLength = arr.length

	createElemNums(arr)
	if (repeatEnable) {
		if (jumpEnable) {
			arrLength = arr.length + 1
		}
		if (potentialItemCount > arr.length && !elemNums.length) {
			countEnableBtn.value = (arr.length - elemsLength) <= 0 ? 1 : arrLength - elemsLength
		}
	}
	for (let i = 0; i < countValue; i++) {
		if (jumpEnable) {
			if (i === (countValue - 1)) {
				arr = dataElems.j
			}
		}
		arrLength = arr.length

		createElemNums(arr)
		if (repeatEnable) {
			if (potentialItemCount > arrLength) {
				createTitle("Неможливо створити таку кількість унікальних елементів!", 200, 3000)
				i = countValue
			} else {
				createNewDataElems(1, elementsList.querySelector(".elements__item:last-child .elements__item-text"), arr, true)

			}
		} else {
			createLi('')
			iterate(1, elementsList.querySelector(".elements__item:last-child .elements__item-text"), arr)
		}
	}

	elementsList.scrollTo({
		behavior: "smooth",
		left: 0,
		top: elementsList.scrollHeight
	})
	optionsInRandom.count = countEnableBtn.value
	localStorage.setItem("optionsInRandom", JSON.stringify(optionsInRandom))
}