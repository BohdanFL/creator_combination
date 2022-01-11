if (elems.a) {
	elems = elems.a
	localStorage.setItem("saveElems", JSON.stringify(elems))
}
elems ? elems.forEach(elem => createLi(elem)) : false

if (optionsInRandom) {
	countEnableBtn.value = optionsInRandom.count
	jumpEnableBtn.checked = optionsInRandom.jumpEnable
	changeJumpEnableBtn.checked = optionsInRandom.changeJumpEnable
	repeatElemBtn.checked = optionsInRandom.repeatEnable
}

if (MOBILE_DEVICE.test(navigator.userAgent)) {
	btnEventStyle = ".btn:active {background-color: transparent;}"
	btnChangeStyle = ".elements__item i.fa-sync-alt:active {color: var(--change-btn);}"
	btnDeleteStyle = ".elements__item i.fa-minus-circle:hover {color: var(--delete-btn);}"
} else {
	btnEventStyle = ".btn:hover {background-color: transparent;}"
	btnChangeStyle = ".elements__item i.fa-sync-alt:hover {color: var(--change-btn);}"
	btnDeleteStyle = ".elements__item i.fa-minus-circle:hover {color: var(--delete-btn);}"

}
document.styleSheets[1].insertRule(btnEventStyle, 7);
document.styleSheets[0].insertRule(btnChangeStyle, 5);
document.styleSheets[0].insertRule(btnDeleteStyle, 6);

// * Потребує оптимізування on('drag:stopped', clearAndSaveElems);
let sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('drag:stopped', clearAndSaveElems);

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
sortable.on('sortable:sort', smoothEnabled);
sortable.on('drag:stopped', smoothDisabled);