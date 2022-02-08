const popupCheckRepeations = () => {
	let repeatEnable = repeatElemBtn.checked
	const repeatObj = isRepeat()
	console.log(repeatObj)
	if (repeatEnable) {
		if (repeatObj.isRepeatBool) {
			const titleWrapper = createPopup("Виберіть елементи для заміни", 100, false, true)
			titleWrapper.innerHTML += `
			<h2 class="popup__subtitle">Готові здійснити заміну?</h2>
			<div class="popup__btns">
				<button class="popup__btn btn" id="confirm" disabled>Так</button>
				<button class="popup__btn btn" id="reject">Ні</button>
			</div>
		`
			elementsList.classList.add("elements__list-active")
			repeatObj.repeatElems.forEach(i => {

				i.closest('.elements__item').classList.add("active")
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
			createPopup("Немає елементів які повторюються", 0, 1500)
		}
	}
}

const rejectedCheckRepeation = () => {
	log("reject")
	elementsList.removeEventListener("mousedown", toggleClass)
	clearStyle()

	if (sortable.destroyed) {
		sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('sortable:stop', updateListOnMove);
		sortable.on('drag:start', hideContextMenuOnDrag)
		sortable.on('sortable:sort', smoothEnabled);
		sortable.on('drag:stopped', smoothDisabled);
		sortable.destroyed = false
	}
}

const confirmedCheckRepeation = () => {
	console.log("confirm")
	addSelectorInListItem(saveList, null, "active")

	elementsList.childNodes.forEach(i => {
		const itemName = i.querySelector('.elements__item-text')
		if (itemName.textContent.trim()) {
			if (i.classList.contains("check")) {
				createNewDataElems(1, itemName).then(clearStyle)
			}
		}
	})
	repeatElemBtn.checked = false
	options.repeatEnable = repeatElemBtn.checked
	localStorage.setItem("options", JSON.stringify(options))
	elementsList.removeEventListener("mousedown", toggleClass)
}