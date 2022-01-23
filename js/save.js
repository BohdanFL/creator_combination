const addBtnsToSaveItem = (item, id) => {
	const deleteBtn = item.querySelector(".fa-minus-circle")
	const activeBtn = item.querySelector(".fa-check-circle")
	const itemName = item.querySelector(".save__item-name")
	// let itemNameText = itemName.textContent.trim()

	deleteBtn.addEventListener("click", () => deleteSave(item, id))
	activeBtn.addEventListener("dblclick", () => activateSave(item, id))
	// itemName.addEventListener("focusout", (e) => changeName(itemName, id, e))
	itemName.addEventListener("keydown", (e) => changeName(itemName, id, e))
}

const deleteSave = (item, id) => {
	saves.forEach((i, n) => {
		if (i.id === id) saves.splice(n, 1)
	})

	// updateSaveList()
	item.remove()
	// if (!saveList.children.length) {
	// 	saveList.innerHTML = 'Збереженнь немає'
	// }
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
		<div class="save__item-btns">
			<i class="fas fa-minus-circle"></i>
			<i class="fas fa-check-circle"></i>
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
	if (elementsList.childNodes.length) {
		const {
			id,
			name
		} = createSaveForList()

		let tempSaves = {
			id,
			name
		}

		elementsList.childNodes.forEach((i, n, arr) => {
			if (i) tempSaves[n] = i.textContent.trim()
		})
		saves.push(tempSaves)
		localStorage.setItem("saves", JSON.stringify(saves))
		createTitle("Збереження пройшло успішно", 200)
	} else createTitle("Немає елементів для збереження", 200, 2000)
}