const createRangeGroup = (range) => {
	const arr = []
	min = parseInt(range.split('-')[0])
	max = parseInt(range.split('-')[1])
	for (let i = min; i <= max; i++) {
		arr.push(i)
	}
	return arr
}

const createChoseArr = (list, input) => {
	const choseArr = []
	const listItems = list.querySelectorAll('.choose__item')
	const elemsLength = elementsList.childElementCount
	const limit = 99 - elemsLength
	listItems.forEach((item, n) => {
		item.addEventListener("click", () => {
			const itemText = item.textContent.trim() || false
			let checkedElems = list.querySelectorAll('.fas.fa-square')
			let checkedLength = checkedElems.length
			if (!chooseJumpEnableBtn.checked) {
				const btn = item.querySelector('button')
				if (btn.classList.contains("far")) {
					if (checkedLength > limit) {
						createPopup("Досягнутий ліміт елементів (99)", 0, 2000)
						return
					}
					btn.classList.replace("far", "fas")
					btn.setAttribute("data-number", checkedLength + 1)

					choseArr.push(itemText)
				} else {
					btn.classList.replace("fas", "far")
					// here
					let searchedText = input.value.toLowerCase().trim()
					if (input.value && !itemText.startsWith(searchedText)) {
						item.style.display = "none"
					}

					const anySearched = []
					const sublist = item.closest(".choose__sublist-wrapper")
					const items = sublist.querySelectorAll(".choose__item")
					items.forEach(i => anySearched.push(i.style.display))

					let isFindedDisplay = anySearched.findIndex(i => i === '')
					if (isFindedDisplay < 0) {
						sublist.style.display = 'none'
					}

					choseArr.splice(choseArr.indexOf(itemText), 1)
					checkedElems.forEach(i => {
						const checkedText = i.parentNode.textContent.trim()
						const index = choseArr.indexOf(checkedText)
						if (index >= 0) {
							i.setAttribute("data-number", index + 1)
						}
					})
				}
			} else {
				const btn = item.querySelector('button')
				if (btn.classList.contains("fa-circle")) {
					choseArr.splice(0, choseArr.length)
					// ` Optimization
					listItems.forEach(i => {
						const checkedBtn = i.querySelector('.fas.fa-check-circle')
						if (checkedBtn) {
							checkedBtn.className = "far fa-circle"
						}
					})

					btn.className = "fas fa-check-circle"
					choseArr.push(itemText)
				} else {
					btn.className = "far fa-circle"
					choseArr.splice(0, choseArr.length)
				}
			}
		})
	})
	return choseArr
}

const toogleOpenSublist = (e, sublists, sublist, summary) => {
	e.preventDefault()

	sublists.forEach(i => {
		if (i !== sublist) {
			i.open = false
		}
	})

	if (!sublist.open) {
		sublist.open = true
	} else {
		sublist.open = false
	}
}

const insertGroups = (groups, list) => {
	let chooseElems = testElems.e
	if (chooseJumpEnableBtn.checked) chooseElems = testElems.j
	groups.forEach((obj) => {
		let groupItems = ''
		let range
		const groupName = Object.keys(obj)[0]

		for (const name in obj) {
			const group = obj[name];
			range = createRangeGroup(group[0])
		}

		if (uniqueEnableBtn) {
			let uniqueElems = elems.filter(function (item, pos, self) {
				return self.indexOf(item) == pos;
			})
			uniqueElems.forEach(elem => {
				range.forEach((i, n) => {
					if (elem === chooseElems[i]) {
						range.splice(n, 1)
					}
				})
			})
		}


		if (!chooseJumpEnableBtn.checked) {
			range.forEach((i) => {
				groupItems += `
					<li class="choose__item list__item">
						${chooseElems[i]}
						<button class="far fa-square"></button>
					</li>
					`
			})
		} else {
			range.forEach((i) => {
				groupItems += `
					<li class="choose__item list__item">
						${chooseElems[i]}
						<button class="far fa-circle"></button>
					</li>
					`
			})
		}


		list.innerHTML += `
		<details class="choose__sublist-wrapper">
			<summary>${groupName}</summary>
			<ol class="choose__sublist">
				${groupItems}
			</ol>
		</details>
	`
	})
	const sublists = list.querySelectorAll(".choose__sublist-wrapper")

	sublists.forEach(sublist => {
		const summary = sublist.querySelector("summary")
		summary.addEventListener("click", (e) => toogleOpenSublist(e, sublists, sublist, summary))
	})
}

const searchInList = (input, sublists, list, choseArr) => {
	let searchText = input.value.toLowerCase().trim()

	if (input.value.length) {
		sublists.forEach(list => {
			let sublistWrapper = list.closest(".choose__sublist-wrapper")
			sublistWrapper.open = true
			let anySearched = []

			let items = list.querySelectorAll(".choose__item")
			items.forEach(item => {
				const btn = item.querySelector('i')
				let text = item.textContent.toLowerCase().trim()
				if (!text.startsWith(searchText)) {
					if (btn.className !== "fas fa-square") {
						item.style.display = "none"
					}
				} else item.style = ""

				anySearched.push(item.style.display)
			})

			let isFindedDisplay = anySearched.findIndex(i => i === '')

			if (isFindedDisplay < 0) {
				sublistWrapper.style.display = 'none'
			} else sublistWrapper.style = ''

		})
	} else {
		const items = list.querySelectorAll(".choose__item")
		items.forEach(item => {
			item.style = ""
		})
		sublists.forEach(list => {
			list.closest(".choose__sublist-wrapper").open = false
			list.closest(".choose__sublist-wrapper").style = ''
		})
	}
}

const createChooseList = (groups, duration) => {
	const wrapper = document.createElement('div')
	wrapper.classList.add('choose__wrapper')
	wrapper.innerHTML = `
	<div class="choose__inner">
		<input type="search" name="search" id="search" placeholder="Пошук...">
		<ol class="choose__list list">
		</ol>
	</div>
	`
	document.body.append(wrapper)

	const list = wrapper.querySelector('.choose__list')

	insertGroups(groups, list)

	const sublists = list.querySelectorAll(".choose__sublist")
	const searchInput = wrapper.querySelector('#search')
	const choseArr = createChoseArr(list, searchInput)

	searchInput.addEventListener("input", () => {
		searchInList(searchInput, sublists, list, choseArr)
	})

	setTimeout(() => wrapper.style.opacity = "1", duration)
	return {
		wrapper,
		choseArr
	}
}

const closeChooseWindow = () => {
	const bg = document.querySelector(".popup__bg"),
		wrapper = document.querySelector(".choose__wrapper"),
		closeBtn = document.querySelector(".choose__btn-close"),
		doneBtn = document.querySelector(".choose__btn-apply")
	if (bg) {
		bg.remove()
		document.body.style = ''
	}
	if (wrapper) wrapper.remove()
	if (closeBtn) closeBtn.remove()
	if (doneBtn) doneBtn.remove()
}

const checkResponsefromChoose = (text) => {
	return new Promise(resolve => {
		const modal = createPrompt(text, 200, false)

		const checkClickforChoose = (e) => {
			modal.confirmBtn.removeEventListener("click", checkClickforChoose)
			resolve(true)
		}

		const checkEnterDownforChoose = (e) => {
			window.removeEventListener("keydown", checkEnterDownforChoose)
			if (e.key === "Enter" || e.keyCode === 13) resolve(true)
		}

		modal.confirmBtn.addEventListener("click", checkClickforChoose)
		window.addEventListener("keydown", checkEnterDownforChoose)

		modal.rejectBtn.addEventListener("click", () => {
			clearStyle(false)
			resolve(false)
		})
	})
}

async function insertItemsInList(choseArr) {
	let lastElem = elementsList.lastChild
	let isLastElemJump = false
	let lastElemText
	if (lastElem) {
		lastElemText = lastElem.querySelector(".elements__item-text")
		isLastElemJump = !!dataElems.j.find(i => i === lastElemText.textContent.trim())
	}

	let response = true
	let popupText = "Успішно додано!"

	if (!choseArr.length) {
		createPopup("Нічого не вибрано", 200, 2000);
		return
	}
	if (isLastElemJump && chooseJumpEnableBtn.checked) {
		// console.log(isLastElemJump)
		await checkResponsefromChoose("Ви готові здійснити заміну?")
			.then(r => {
				response = r
			})
			.catch(e => console.error(e))

		if (response) {
			lastElemText.textContent = choseArr[0];
			elems[elems.length - 1] = choseArr[0];
			clearStyle();
			popupText = "Успішно замінено!";
		}
	} else {
		choseArr.forEach(i => {
			console.log(isLastElemJump)
			elems.push(i)
			createLi(i, isLastElemJump)
		})
		elementsList.scrollTo({
			behavior: "smooth",
			left: 0,
			top: elementsList.scrollHeight
		})
	}


	if (response) closeChooseWindow()

	localStorage.setItem("elems", JSON.stringify(elems))
	if (response) {
		setTimeout(() => {
			createPopup(popupText, 200, 2000);
		}, 200);
	}
}

const addCloseBtn = (duration) => {
	const btn = document.createElement('button')
	btn.className = 'fas fa-times choose__btn-close'
	document.body.append(btn)

	setTimeout(() => btn.style.opacity = "1", duration)
	btn.addEventListener('click', closeChooseWindow);
}

const addDoneBtn = (choseArr, duration) => {
	const btn = document.createElement('button')
	btn.className = 'btn choose__btn-apply'
	btn.textContent = 'Apply'
	document.body.append(btn)

	setTimeout(() => btn.style.opacity = "1", duration)
	btn.addEventListener('click', () => insertItemsInList(choseArr));
}

const openChooseWindow = (duration = 0) => {
	let groups = dataElems.groups.e
	if (chooseJumpEnableBtn.checked) groups = dataElems.groups.j

	const bg = addDarkenedBg(duration)
	bg.style.zIndex = "11"
	const {
		wrapper,
		choseArr
	} = createChooseList(groups, duration)
	addCloseBtn(duration)
	addDoneBtn(choseArr, duration)
}