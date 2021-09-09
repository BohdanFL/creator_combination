const log = (...text) => console.log(...text)

const random = (array) => Math.floor(Math.random() * array.length)

const clearAndSaveElems = () => {
	elems = []
	for (let i = 0; i < elementsList.childNodes.length; i++) {
		if (elementsList.childNodes[i].textContent.trim()) {
			elems.push(elementsList.childNodes[i].textContent.trim())
		}
	}
	localStorage.setItem("saveElems", JSON.stringify(elems))
}

const confirmToggleDisable = () => {
	const confirmBtn = document.querySelector("#confirm")
	let isContainsClass = false
	elementsList.childNodes.forEach(i => {
		if (i.textContent.trim()) {
			if (i.classList.contains("check")) {
				isContainsClass = true
			}
		}
	})
	confirmBtn.disabled = !isContainsClass
}

const toggleClass = (e) => {
	if (e.target.closest(".elements__item")) {
		e.target.closest(".elements__item").classList.toggle("check")
	}
	confirmToggleDisable()
}