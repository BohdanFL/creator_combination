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

themesBtns.forEach(item => {
	item.addEventListener("change", () => {
		const themeValue = item.getAttribute("theme")
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
	})
})