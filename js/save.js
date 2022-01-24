const addBtnsToSaveItem = (item, id) => {
	const deleteBtn = item.querySelector(".fa-minus-circle")
	const activeBtn = item.querySelector(".fa-check-circle")
	const itemName = item.querySelector(".save__item-name")
	let contextElemBtn = item.querySelector('.fas.fa-ellipsis-v')

	deleteBtn.addEventListener("click", () => deleteSave(item, id))
	activeBtn.addEventListener("dblclick", () => activateSave(item, id))
	itemName.addEventListener("focusout", (e) => changeName(itemName, id, e))
	itemName.addEventListener("keydown", (e) => changeName(itemName, id, e))
	contextElemBtn.addEventListener('click', () => openContextMenu(item))
}

const deleteSave = (item, id) => {
	saves.forEach((i, n) => {
		if (i.id === id) saves.splice(n, 1)
	})

	item.remove()
	localStorage.setItem("saves", JSON.stringify(saves))
}

const activateSave = (item, id) => {
	addSelectorInListItem(saveList, item, "active")

	const findedSave = saves.find((i) => i.id === id)

	if (findedSave) {
		elementsList.innerHTML = ''
		elems = []
		Object.keys(findedSave).forEach(key => {
			const item = findedSave[key];
			if (key !== "id" && key !== "name") {
				elems.push(item)
				createLi(item)
			}
		})
		localStorage.setItem('elems', JSON.stringify(elems))
	}
}

const changeName = (itemName, id, e) => {
	let itemNameText = saves.find((i) => i.id === id).name

	if (e.type === 'keydown' &&
		(e.key !== "Backspace" || e.keyCode !== 8) &&
		(e.key !== "ArrowUp" || e.keyCode !== 38) &&
		(e.key !== "ArrowLeft" || e.keyCode !== 37) &&
		(e.key !== "ArrowRight" || e.keyCode !== 39) &&
		(e.key !== "ArrowDown" || e.keyCode !== 40) &&
		(e.key !== "Delete" || e.keyCode !== 46)) {
		if ((itemName.textContent.trim().length) >= 13) {
			e.preventDefault()
		}
	}

	if (e.type === 'focusout' || (e.type === 'keydown' && (e.key === "Enter" || e.keyCode === 13))) {
		e.target.innerText = e.target.innerText.trim()
		if (e.type === 'keydown') itemName.blur()
		if (!e.target.innerText) {
			itemName.textContent = itemNameText
		} else if (itemNameText === e.target.innerText) {
			return
		} else {
			saves.forEach((i, n) => {
				if (i.id === id) saves[n].name = e.target.innerText
			})
		}
	}

	localStorage.setItem("saves", JSON.stringify(saves))
}


const createSaveForList = (save) => {
	let id, name

	if (!save) {
		let ms = new Date().getMilliseconds()
		id = new Date().toLocaleTimeString() + ":" + ms
		name = `Save ${saveList.childNodes.length + 1}`
	} else {
		id = save.id
		name = save.name
	}

	const item = document.createElement("li")
	item.classList.add("save__item")
	item.innerHTML = `
		<span class="save__item-name" contenteditable="true">${name}</span>
		<i title="Опції" class="save__item-opener context-menu__opener fas fa-ellipsis-v"></i>
		<div class="save__context-menu context-menu hide">
			<i class="fas fa-minus-circle context-menu__btn">
				<span class="context-menu__btn-name">Видалити</span>
			</i>
			<i class="fas fa-check-circle context-menu__btn">
				<span class="context-menu__btn-name">Активувати</span>
			</i>
		</div>
	`
	saveList.insertAdjacentElement('beforeend', item)

	addBtnsToSaveItem(item, id)
	return {
		id,
		name
	}
}

const savingList = () => {
	const saveItemsLimit = 50
	if (!(saveList.children.length < saveItemsLimit)) {
		createTitle(`Ви досягли ліміту збережень (${saveItemsLimit})`, 200, 2000)
		return
	}
	if (elementsList.children.length) {
		const {
			id,
			name
		} = createSaveForList()

		let tempSaves = {
			id,
			name
		}

		elementsList.childNodes.forEach((i, n, arr) => {
			if (i) tempSaves[n] = i.querySelector('.elements__item-text').textContent.trim()
		})
		saves.push(tempSaves)
		new Promise((resolve, reject) => {
			localStorage.setItem("saves", JSON.stringify(saves))
			resolve(null)
		}).then(value => {
			createTitle("Збереження пройшло успішно", 200, 2000)
		}).catch(error => {
			createTitle("Збереження невдалось", 200, 2000)
		})
	} else createTitle("Немає елементів для збереження", 200, 2000)
}