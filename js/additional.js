const log = (...text) => console.log(...text)

const random = (array) => array[Math.floor(Math.random() * array.length)]

const clearAndSave = (arr = elems, list = elementsList.childNodes, name = "elems") => {
	arr = []
	for (let i = 0; i < list.length; i++) {
		if (list[i].querySelector('.elements__item-text').textContent.trim()) {
			arr.push(list[i].querySelector('.elements__item-text').textContent.trim())
		}
	}
	localStorage.setItem(name, JSON.stringify(arr))
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
const addSelectorInListItem = (list, item, selector) => {
	list.childNodes.forEach(i => {
		if (i.textContent.trim()) i.classList.remove(selector)
	})
	if (item) {
		item.classList.add(selector)
	}
}

const toggleClass = (e) => {
	if (e.target.closest(".elements__item")) {
		e.target.closest(".elements__item").classList.toggle("check")
	}
	confirmToggleDisable()
}

const openContextMenu = (li) => {
	const contextMenu = li.querySelector('.context-menu')
	let list = li.closest('.list')

	if (contextMenu.classList.contains('hide')) {
		contextMenu.classList.remove('hide')
	}
	if (list.childElementCount === 1) {
		list.style.overflow = 'visible'
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
						if (contextMenu && !contextMenu.classList.contains('hide')) {
							contextMenu.classList.add('hide')
						}
					}
					if (l.childElementCount === 1) {
						l.style = ''
					}
				})
			})
		}
	}
}

const createGuidePage = (elem, text, positionText) => {
	// const bg = addDarkenedBg("200")
	// bg.style.zIndex = "99"
	// console.dir(elem)
	// elem.style.position = "relative"
	// elem.style.zIndex = 100
	document.body.scrollTo({
		behavior: "smooth",
		left: 0,
		top: document.body.scrollHeight
	})
	// document.body.style.overflow = "hidden"
}

const guideShow = (e) => {
	createGuidePage(randomBtn, "Lorem impus? Lore mishor dore o has")
}

const toggleMode = () => {
	const randomBlock = document.querySelector(".random")
	const chooseBlock = document.querySelector(".choose")
	randomBlock.classList.toggle("hide")
	chooseBlock.classList.toggle("hide")
}