if (optionsInRandom) {
	countEnableBtn.value = optionsInRandom.count
	jumpEnableBtn.checked = optionsInRandom.jumpEnable
	changeJumpEnableBtn.checked = optionsInRandom.changeJumpEnable
	repeatElemBtn.checked = optionsInRandom.repeatEnable
}

// * Потребує оптимізування on('drag:stopped', clearAndSaveElems);
let sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('drag:stopped', clearAndSave);

if (elementsList.childNodes[1]) {
	elemWidth = elementsList.childNodes[1].offsetWidth
}

const smoothDisabled = () => {
	setTimeout(() => {
		document.querySelector(".draggable-source--placed").classList.remove("active")
	}, 0)
}

const smoothEnabled = () => {
	const mirror = document.querySelector(".draggable-mirror")
	const dragSource = document.querySelector(".draggable-source--is-dragging")
	mirror.style.width = elemWidth + "px"
	setTimeout(() => {
		if (mirror) mirror.classList.add("active")
		if (dragSource) dragSource.classList.remove("active")
	}, 200)
}

const toggleActiveItem = () => {
	const item = elementsList.lastChild
	const isJump = !!dataElems.j.find(i => i === item.textContent.trim())

	if (isJump) {
		item.querySelectorAll("i.fas").forEach(i => {
			if (!i.style.pointerEvents) {
				i.style.pointerEvents = 'none'
			} else {
				i.style = ''
			}
		})
	}
}

sortable.on('drag:start', toggleActiveItem);
sortable.on('drag:stopped', toggleActiveItem);

sortable.on('sortable:sort', smoothEnabled);
sortable.on('drag:stopped', smoothDisabled);
sortable.on('drag:stopped', () => addSelectorInListItem(saveList, null, "active"));