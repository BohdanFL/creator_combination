const addBtnsToSaveItem = (item, id) => {
	const deleteBtn = item.querySelector(".fa-minus-circle")
	const activeBtn = item.querySelector(".fa-check-circle")

	deleteBtn.addEventListener("click", () => deleteSave(item, id))
	activeBtn.addEventListener("dblclick", () => activateSave(item, id))
	item.addEventListener("dblclick", () => changeName(item, id))
}

const deleteSave = (item, id) => {
	saves.forEach((i, n) => {
		if (i.id === id) saves.splice(n, 1)
	})

	item.remove()
	localStorage.setItem("saves", JSON.stringify(saves))
}

const activateSave = (item, id) => {
	// const id = item.querySelector(".save__item-name").textContent.trim()
	addSelectorInListItem(saveList, item, "active")

	const findedSave = saves.find((i, n) => i.id === id)

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

const changeName = (item, id) => {

}


const createSaveForList = (save) => {
	let id, name

	if (!save) {
		let ms = new Date().getMilliseconds()
		id = new Date().toLocaleTimeString() + ":" + ms
		name = `Save ${saveList.childNodes.length}`
	} else {
		id = save.id
		name = save.name
	}

	const item = document.createElement("li")
	item.classList.add("save__item")
	item.innerHTML = `
		<span class="save__item-name">${name}</span>
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