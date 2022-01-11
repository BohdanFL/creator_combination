const popupCheckRepeations = () => {
	let repeatEnable = repeatElemBtn.checked
	const repeatObj = isRepeat()
	if (repeatEnable) {
		if (repeatObj.isRepeatBool) {
			const titleWrapper = createTitle("Виберіть елементи для заміни", 100, false, true)
			titleWrapper.innerHTML += `
			<h2 class="popup__subtitle">Готові здійснити заміну?</h2>
			<div class="popup__btns">
				<button class="popup__btn btn" id="confirm" disabled>Так</button>
				<button class="popup__btn btn" id="reject">Ні</button>
			</div>
		`
			elementsList.classList.add("elements__list-active")
			repeatObj.repeatElems.forEach(i => {
				i.classList.add("active")
			})

			sortable.destroy()
			sortable.destroyed = true

			const confirmBtn = document.querySelector("#confirm")
			const rejectBtn = document.querySelector("#reject")
			selectAll.classList.remove("hide")
			unselectAll.classList.remove("hide")

			elementsList.addEventListener("mousedown", toggleClass)
			confirmBtn.addEventListener("click", confirmedCheckRepeation, {
				once: true
			})
			rejectBtn.addEventListener("click", rejectedCheckRepeation, {
				once: true
			})
		} else {
			createTitle("Немає елементів які повторюються", 0, 1500)
		}
	}
}

const rejectedCheckRepeation = () => {
	log("reject")
	elementsList.removeEventListener("mousedown", toggleClass)
	clearStyle()
	// repeatElemBtn.checked = false
	// optionsInRandom.repeatEnable = false
	// localStorage.setItem("optionsInRandom", JSON.stringify(optionsInRandom))
	if (sortable.destroyed) {
		sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('drag:stopped', clearAndSaveElems);
		sortable.on('sortable:sort', smoothEnabled);
		sortable.on('drag:stopped', smoothDisabled);
		sortable.destroyed = false
	}
}

const confirmedCheckRepeation = () => {
	console.log("confirm")
	let changeJumpEnable = changeJumpEnableBtn.checked
	let arr = changeJumpEnable ? dataElems.j : dataElems.e

	elementsList.childNodes.forEach(i => {
		if (i.textContent.trim()) {
			if (i.classList.contains("check")) {
				createNewDataElems(1, i.querySelector(".elements__item-text"), arr).then(() => {
					clearStyle()
				})
			}
		}
	})
	repeatElemBtn.checked = false
	optionsInRandom.repeatEnable = false
	localStorage.setItem("optionsInRandom", JSON.stringify(optionsInRandom))
	elementsList.removeEventListener("mousedown", toggleClass)
}