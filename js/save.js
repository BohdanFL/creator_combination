const addBtnsToSaveItem = (item) => {
	const deleteBtn = item.querySelector(".fa-minus-circle")
	const activeBtn = item.querySelector(".fa-check-circle")

	deleteBtn.addEventListener("click", () => deleteSave(item))
	activeBtn.addEventListener("dblclick", () => activateSave(item))
}

const deleteSave = (item) => {
	const id = item.querySelector(".save__item-name").textContent.trim()

	saves.forEach((i, n) => {
		if (i.id === id) saves.splice(n, 1)
	})

	item.remove()
	localStorage.setItem("saves", JSON.stringify(saves))
}

const activateSave = (item) => {
	const id = item.querySelector(".save__item-name").textContent.trim()
	addSelectorInListItem(saveList, item, "active")

	const findedSave = saves.find((i, n) => i.id === id)

	if (findedSave) {
		elementsList.innerHTML = ''
		elems = []
		for (const value in findedSave) {
			const item = findedSave[value];
			if (value !== "id") {
				elems.push(item)
				createLi(item)
			}
		}
		localStorage.setItem('elems', JSON.stringify(elems))
	}
}


const createSaveForList = (save) => {
	let id

	if (!save) {
		let ms = new Date().getMilliseconds()
		id = new Date().toLocaleTimeString() + ":" + ms
	} else id = save.id

	const item = document.createElement("li")
	item.classList.add("save__item")
	item.innerHTML = `
		<span class="save__item-name">${id}</span>
		<div class="save__item-btns">
			<i class="fas fa-minus-circle"></i>
			<i class="fas fa-check-circle"></i>
		</div>
	`
	saveList.insertAdjacentElement('beforeend', item)

	addBtnsToSaveItem(item)
	return id
}

const savingList = () => {
	if (elementsList.childNodes.length) {
		const id = createSaveForList()

		let tempSaves = {
			id: id
		}

		elementsList.childNodes.forEach((i, n, arr) => {
			if (i) tempSaves[n] = i.textContent.trim()
		})
		saves.push(tempSaves)
		localStorage.setItem("saves", JSON.stringify(saves))
		createTitle("Збереження пройшло успішно", 200)
	} else createTitle("Немає елементів для збереження", 200, 2000)
}