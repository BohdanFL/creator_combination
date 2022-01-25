const addBtnToLi = (li) => {
	let deleteElemBtn = li.querySelector('.fas.fa-minus-circle')
	let changeElemBtn = li.querySelector('.fas.fa-sync-alt')
	let contextElemBtn = li.querySelector('.fas.fa-ellipsis-v')

	// elementsList.childNodes.forEach((i, n) => li.index = n)
	// console.log(deleteElemBtn)
	deleteElemBtn.addEventListener('click', () => deletingElem(li))
	changeElemBtn.addEventListener('click', () => changingElem(li))
	contextElemBtn.addEventListener('click', () => openContextMenu(li))
}

const openContextMenu = (li) => {
	const contextMenu = li.querySelector('.context-menu')
	elementsList.childNodes.forEach((i) => {
		const contextMenu = i.querySelector('.context-menu')
		if (i.textContent.trim()) {
			contextMenu.classList.add('hide')
		}
	})
	if (contextMenu.classList.contains('hide')) {
		contextMenu.classList.remove('hide')
	}
}

const closeContextMenu = (e) => {
	const list = document.querySelectorAll('.list')
	const li = e.target.closest('li')
	if (e.target.classList.contains('context-menu__opener') && !li.querySelector('.context-menu.hide')) return

	if (!e.target.closest('.context-menu')) {
		if (list.length) {
			list.forEach(l => {
				l.childNodes.forEach((i) => {
					if (i.textContent.trim()) {
						const contextMenu = i.querySelector('.context-menu')
						if (!contextMenu.classList.contains('hide')) {
							contextMenu.classList.add('hide')
						}
					}
				})
			})
		}
	}
}

window.addEventListener("touchstart", closeContextMenu)

const deletingElem = (li) => {
	li.remove()

	elems.forEach((i, n) => {
		if (li.index === n) elems.splice(n, 1)
		return
	})
	elementsList.childNodes.forEach((i, n) => i.index = n)

	addSelectorInListItem(saveList, null, "active")
	localStorage.setItem("elems", JSON.stringify(elems))
}

const changingElem = (li) => {
	let changeJumpEnable = changeJumpEnableBtn.checked
	let repeatEnable = repeatElemBtn.checke
	let arr = dataElems.e
	addSelectorInListItem(saveList, null, "active")
	li.querySelector('.context-menu').classList.add('hide')

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
	if (pos) {
		if (lastItem) {
			lastItem.closest(".elements__item").insertAdjacentElement('beforebegin', li)
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

	if (elementsList.childNodes[1]) {
		elemWidth = elementsList.childNodes[1].offsetWidth
	} else if (elementsList.childNodes[0].textContent.trim()) {
		elemWidth = elementsList.childNodes[0].offsetWidth
	} else {
		elemWidth = elementsList.childNodes[2].offsetWidth
	}
	return li
}