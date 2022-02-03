const addBtnToLi = (li) => {
	let deleteElemBtn = li.querySelector('.fas.fa-minus-circle')
	let changeElemBtn = li.querySelector('.fas.fa-sync-alt')
	let contextElemBtn = li.querySelector('.fas.fa-ellipsis-v')

	deleteElemBtn.addEventListener('click', () => deletingElem(li))
	changeElemBtn.addEventListener('click', () => changingElem(li))
	contextElemBtn.addEventListener('click', () => openContextMenu(li))
}


const deletingElem = (li) => {
	li.remove()

	elementsList.childNodes.forEach((i, n) => i.index = n)

	elems.forEach((i, n) => {
		if (li.index === n) {
			elems.splice(n, 1)

		}
		return
	})

	addSelectorInListItem(saveList, null, "active")
	localStorage.setItem("elems", JSON.stringify(elems))
}

//` Doesnt't work correct
const changingElem = (li) => {
	let changeJumpEnable = changeJumpEnableBtn.checked
	let repeatEnable = repeatElemBtn.checked
	let arr = dataElems.e
	addSelectorInListItem(saveList, null, "active")
	if (!li.querySelector('.context-menu').classList.contains('hide')) {
		li.querySelector('.context-menu').classList.add('hide')
	}

	if (changeJumpEnable && !li.nextElementSibling) {
		arr = dataElems.j
	}

	li = li.querySelector(".elements__item-text")
	if (repeatEnable) {
		createNewDataElems(1, li, arr, true)
	} else {
		iterate(1, li, arr, arr, true)
	}
}

const createLi = (text, pos) => {
	const li = document.createElement('li')
	text = text === '' ? random(dataElems.e) : text
	li.classList.add('elements__item')
	li.innerHTML = `
	<div class="elements__item-wrapper">
		<span class="elements__item-text">${text}</span>  
		<i title="Опції" class="elements__item-opener context-menu__opener fas fa-ellipsis-v"></i>
		<div class="elements__context-menu context-menu hide">
			<i class="fas fa-sync-alt context-menu__btn">
				<span class="context-menu__btn-name">Змінити</span>
			</i> 
			<i class="fas fa-minus-circle context-menu__btn">
				<span class="context-menu__btn-name">Видалити</span>
			</i>
		</div>
	</div>`
	let isJump
	let lastItem = elementsList.lastChild
	if (pos) {
		if (lastItem) {
			lastItem.insertAdjacentElement('beforebegin', li)
		}
	} else {
		elementsList.append(li)
	}
	li.index = elementsList.childNodes.length - 1
	addBtnToLi(li)
	if (elementsList.childNodes.length === elems.length && dataElems.j) {
		const item = elementsList.lastChild
		isJump = !!dataElems.j.find(i => i === item.textContent.trim())
		if (isJump) item.classList.add("jump")
	}

	if (elementsList.childNodes[0]) {
		elemWidth = elementsList.childNodes[0].offsetWidth
	}
	return li
}