const checkResponsefromDelete = (modal) => {
	modal.response = document.querySelector('#prompt-response').value

	if (modal.response === "ТАК") {
		clearStyle()
		elementsList.innerHTML = ''
		elems = []
		localStorage.setItem('saveElems', JSON.stringify(elems))
	} else if (modal.response === "НІ") {
		clearStyle()
		return
	} else deleteAllList()
}

const deleteAllList = () => {
	if (elementsList.childElementCount) {

		const modal = createPrompt("Готові здійснити видалення?", 200)

		const checkClickforDelete = (e) => {
			checkResponsefromDelete(modal)
			modal.confirmBtn.removeEventListener("click", checkClickforDelete)
		}
		const checkEnterDownforDelete = (e) => {
			if (e.key === "Enter" || e.keyCode === 13) checkResponsefromDelete(modal)
			window.removeEventListener("keydown", checkEnterDownforDelete)
		}

		modal.confirmBtn.addEventListener("click", checkClickforDelete)
		window.addEventListener("keydown", checkEnterDownforDelete)

		modal.rejectBtn.addEventListener("click", clearStyle)

	} else createTitle("Немає елементів", 0, 1000)
}

const checkResponsefromChange = (modal) => {
	modal.response = document.querySelector('#prompt-response').value

	if (modal.response === "ТАК") {
		clearStyle()
		changeAllBtn.disabled = true
		changeAllBtn.textContent = "Disabled"

		const elementsItemList = elementsList.querySelectorAll(".elements__item .elements__item-text")
		elems = []
		let jumpEnable, repeatEnable
		enableOptions ? jumpEnable = jumpEnableBtn.checked : jumpEnable = false
		enableOptions ? repeatEnable = repeatElemBtn.checked : repeatEnable = false

		let arr = dataElems.e
		elementsItemList.forEach((item, num) => {
			if (jumpEnable) {
				if (num === (elementsList.children.length - 1)) {
					arr = dataElems.j
				}
			}

			if (repeatEnable) {
				createNewDataElems(1, item, arr).then(() => {
					changeAllBtn.disabled = false
					changeAllBtn.textContent = "Change all"
				})
			} else {
				iterate(1, item, arr).then(() => {
					changeAllBtn.disabled = false
					changeAllBtn.textContent = "Change all"
				})
			}
		})
	} else if (modal.response === "НІ") {
		clearStyle()
		return
	} else changeAllList()
}

const changeAllList = () => {
	if (elementsList.childElementCount) {
		const modal = createPrompt("Готові здійснити заміну?", 200)

		const checkClickforChange = (e) => {
			checkResponsefromChange(modal)
			modal.confirmBtn.removeEventListener("click", checkClickforChange)
		}
		const checkEnterDownforChange = (e) => {
			if (e.key === "Enter" || e.keyCode === 13) checkResponsefromChange(modal)
			window.removeEventListener("keydown", checkEnterDownforChange)
		}

		modal.confirmBtn.addEventListener("click", checkClickforChange)
		window.addEventListener("keydown", checkEnterDownforChange)

		modal.rejectBtn.addEventListener("click", clearStyle)

	} else createTitle("Немає елементів", 0, 1000)
}

const addClickForOptions = (btn, value, event = "click", func) => {
	btn.addEventListener(event, () => {
		typeof func === "function" ? func() : optionsInRandom[value] = btn.checked
		localStorage.setItem("optionsInRandom", JSON.stringify(optionsInRandom))
	})
}

const selectAndUnselect = (btn, action) => {
	btn.addEventListener("click", () => {
		elementsList.childNodes.forEach(i => {
			if (i.textContent.trim()) {
				if (i.classList.contains("active")) {
					i.classList[action]("check")
				}
			}
		})
		confirmToggleDisable()
	})
}

readTextFile("data.json", function (text) {
	dataElems = JSON.parse(text);

	for (let i = 0; i < 11; i++) {
		dataElems.e.splice(i, 11)
	}

	randomBtn.addEventListener('click', () => addRandomElem(dataElems));
	customBtn.addEventListener('click', () => {
		createTitle("У майбутньому...", 0, 1500)
	});
	document.querySelector(".elements__save").addEventListener('click', () => {
		createTitle("У майбутньому...", 0, 1500)
	});
	deleteAllBtn.addEventListener('click', deleteAllList);
	changeAllBtn.addEventListener('click', changeAllList)
	enableOptionsBtn.addEventListener('click', checkingOptions)

	selectAndUnselect(selectAll, "add")
	selectAndUnselect(unselectAll, "remove")

	addClickForOptions(countEnableBtn, "count", "input", () => {
		if (countEnableBtn.value.length > 2) {
			countEnableBtn.value = countEnableBtn.value.substring(0, countEnableBtn.value.length - 1)
		}
		countEnableBtn.value < 1 ? optionsInRandom.count = 1 : optionsInRandom.count = countEnableBtn.value
	})
	addClickForOptions(jumpEnableBtn, "jumpEnable")
	addClickForOptions(changeJumpEnableBtn, "changeJumpEnable")
	addClickForOptions(repeatElemBtn, "repeatEnable")

});