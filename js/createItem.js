const addBtnToLi = (li) => {
	let deleteElemBtn = li.querySelector('.fas.fa-minus-circle')
	let changeElemBtn = li.querySelector('.fas.fa-sync-alt')

	deleteElemBtn.addEventListener('click', () => deletingElem(deleteElemBtn))
	changeElemBtn.addEventListener('click', () => changingElem(changeElemBtn))
}

const deletingElem = (elem) => {
	console.log('DELETE');
	const parent = elem.parentNode.parentNode.parentNode
	parent.remove()
	clearAndSaveElems()
}

const changingElem = (elem) => {
	console.log('CHANGE');
	let changeJumpEnable, repeatEnable
	enableOptions ? changeJumpEnable = changeJumpEnableBtn.checked : changeJumpEnable = false
	enableOptions ? repeatEnable = repeatElemBtn.checked : repeatEnable = false
	let arr = dataElems.e

	if (changeJumpEnable) {
		arr = dataElems.j
	}
	if (repeatEnable) {
		createNewDataElems(1, elem.parentNode.previousSibling.previousSibling, arr)
	} else {
		iterate(1, elem.parentNode.previousSibling.previousSibling, arr, arr, true)
	}
}

const createLi = (text) => {
	const li = document.createElement('li')
	text = text === '' ? dataElems.e[random(dataElems).e] : text
	li.classList.add('elements__item')
	li.innerHTML = `<div class="elements__item-wrapper">
				<span class="elements__item-text">${text}</span>  
				<div class="elements__item-btns">
					<i class="fas fa-sync-alt"></i> 
					<i class="fas fa-minus-circle"></i>
				</div>
			</div>`
	elementsList.appendChild(li)

	addBtnToLi(li)
	if (elementsList.childNodes[1]) {
		elemWidth = elementsList.childNodes[1].offsetWidth
	} else if (elementsList.childNodes[0].textContent.trim()) {
		elemWidth = elementsList.childNodes[0].offsetWidth
	} else {
		elemWidth = elementsList.childNodes[2].offsetWidth
	}
	return li
}