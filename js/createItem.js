const addBtnToLi = (li) => {
	let deleteElemBtn = li.querySelector('.fas.fa-minus-circle')
	let changeElemBtn = li.querySelector('.fas.fa-sync-alt')

	deleteElemBtn.addEventListener('click', () => deletingElem(li))
	changeElemBtn.addEventListener('click', () => changingElem(li))
}

const deletingElem = (li) => {
	li.remove()
	clearAndSave(elems, elementsList.childNodes)
	addSelectorInListItem(saveList, null, "active")
}

const changingElem = (li) => {
	let changeJumpEnable = changeJumpEnableBtn.checked
	let repeatEnable = repeatElemBtn.checke
	let arr = dataElems.e
	addSelectorInListItem(saveList, null, "active")

	if (changeJumpEnable && !li.nextElementSibling) {
		arr = dataElems.j
	}

	li = li.querySelector(".elements__item-text")
	if (repeatEnable) {
		createNewDataElems(1, li, arr)
	} else {
		iterate(1, li, arr, arr, true)
	}
}

const createLi = (text, pos, lastItem) => {
	const li = document.createElement('li')
	text = text === '' ? random(dataElems.e) : text
	li.classList.add('elements__item')
	li.innerHTML = `
			<div class="elements__item-wrapper">
				<span class="elements__item-text">${text}</span>  
				<div class="elements__item-btns">
					<i class="fas fa-sync-alt"></i> 
					<i class="fas fa-minus-circle"></i>
				</div>
			</div>`
	let isJump

	if (pos) {
		if (lastItem) {
			lastItem.closest(".elements__item").insertAdjacentElement('beforebegin', li)
		}
	} else {
		elementsList.append(li)
	}
	addBtnToLi(li)
	if (elementsList.childNodes.length === elems.length && dataElems.j) {
		const item = elementsList.lastChild
		isJump = !!dataElems.j.find(i => i === item.textContent.trim())
		if (isJump) item.style.pointerEvents = 'none'
	}

	if (elementsList.childNodes[1]) {
		elemWidth = elementsList.childNodes[1].offsetWidth
	} else if (elementsList.childNodes[0].textContent.trim()) {
		elemWidth = elementsList.childNodes[0].offsetWidth
	} else {
		elemWidth = elementsList.childNodes[2].offsetWidth
	}
	return li
}