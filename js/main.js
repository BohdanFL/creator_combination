const deleteAllList = (modal) => {
	clearStyle()
	addSelectorInListItem(saveList, null, "active")
	elementsList.innerHTML = ''
	elems = []
	localStorage.setItem('elems', JSON.stringify(elems))
}

const checkResponsefromDelete = () => {
	if (elementsList.childElementCount) {

		const modal = createPrompt("Готові здійснити видалення?", 200, false)

		const checkClickforDelete = (e) => {
			deleteAllList(modal)
			modal.confirmBtn.removeEventListener("click", checkClickforDelete)
		}
		const checkEnterDownforDelete = (e) => {
			if (e.key === "Enter" || e.keyCode === 13) deleteAllList(modal)
			window.removeEventListener("keydown", checkEnterDownforDelete)
		}

		modal.confirmBtn.addEventListener("click", checkClickforDelete)
		window.addEventListener("keydown", checkEnterDownforDelete)

		modal.rejectBtn.addEventListener("click", clearStyle)

	} else createTitle("Немає елементів", 0, 1000)
}

const changeAllList = (modal) => {
	changeAllBtn.disabled = true
	changeAllBtn.textContent = "Disabled"
	addSelectorInListItem(saveList, null, "active")

	elems = []
	let jumpEnable = jumpEnableBtn.checked
	let repeatEnable = repeatElemBtn.checked

	let arr = dataElems.e
	elementsList.childNodes.forEach((item, num) => {
		if (jumpEnable) {
			if (num === elementsList.childNodes.length - 1) {
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
	clearStyle()
}

const checkResponsefromChange = () => {
	if (elementsList.childElementCount) {
		const modal = createPrompt("Готові здійснити заміну?", 200, false)

		const checkClickforChange = (e) => {
			changeAllList(modal)
			modal.confirmBtn.removeEventListener("click", checkClickforChange)
		}
		const checkEnterDownforChange = (e) => {
			if (e.key === "Enter" || e.keyCode === 13) changeAllList(modal)
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

readTextFile("data.json", function (data) {
	dataElems = JSON.parse(data);

	for (let i = 0; i < 11; i++) {
		dataElems.e.splice(i, 11)
	}

	elems ? elems.forEach(elem => createLi(elem)) : false
	saves ? saves.forEach(save => createSaveForList(save)) : false

	randomBtn.addEventListener('click', () => addRandomElem(dataElems));
	customBtn.addEventListener('click', () => {
		createTitle("У майбутньому...", 0, 1500)
	});
	saveBtn.addEventListener('click', savingList);
	deleteAllBtn.addEventListener('click', checkResponsefromDelete);
	changeAllBtn.addEventListener('click', checkResponsefromChange)

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
	repeatElemBtn.addEventListener('click', preCheckRepetions)
});