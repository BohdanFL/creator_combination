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

const root = document.documentElement
const themesBtns = document.querySelectorAll(".themes__radio")

const themes = {
	standart: [
		'#3B1719',
		'#69140e',
		'#a44200',
		'#d58936',
		'#fff94f',
	],
	light: ['grey'],
	dark: [
		'#111111',
		'#212121',
		'#262626',
		'#404040',
		'#7A7A7A',
	],
	blue: [
		'#0d1b2a',
		'#1b263b',
		'#415a77',
		'#778da9',
		'#e0e1dd'
	],
	greyBlue: [
		'#212529',
		'#343a40',
		'#495057',
		'#adb5bd',
		'#e9ecef'
	]
}


// ` TODO: It need opmization
const setTheme = (themeValue, once = false) => {
	if (themeValue === 'standart' && once) return
	let mainBg, submainBg, popupAndTitleBg, btnBg, btnFontAndBorder
	if (themeValue) {
		mainBg = themes[themeValue][0]
		submainBg = themes[themeValue][1]
		popupAndTitleBg = themes[themeValue][2]
		btnBg = themes[themeValue][3]
		btnFontAndBorder = themes[themeValue][4]
	}

	root.style.setProperty('--main-bg', mainBg)
	root.style.setProperty('--submain-bg', submainBg)
	root.style.setProperty('--popup-and-title-bg', popupAndTitleBg)
	root.style.setProperty('--btn-bg', btnBg)
	root.style.setProperty('--btn-font-and-border', btnFontAndBorder)
	root.style.setProperty('--item-bg', btnFontAndBorder + "1a")
}

let themeValue = localStorage.getItem("active-theme") || "standart"

setTheme(themeValue, true)

themesBtns.forEach(item => {
	item.addEventListener("change", () => {
		themeValue = item.getAttribute("theme")
		setTheme(themeValue)

		localStorage.setItem("active-theme", themeValue)
	})
})