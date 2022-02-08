let root = document.documentElement
let switchThemeBtn = document.querySelector("#switch-theme")
let theme = localStorage.getItem("theme") || 'dark'

if (theme) {
	root.classList.add(theme)
	if (theme === 'light') {
		switchThemeBtn.classList.replace("fas", "far")
	} else {
		switchThemeBtn.classList.replace("far", "fas")
	}
}

switchThemeBtn.addEventListener("click", () => {
	if (switchThemeBtn.classList.contains("fas")) {
		switchThemeBtn.classList.replace("fas", "far")
		theme = 'light'
		root.classList.replace("dark", theme)

	} else {
		switchThemeBtn.classList.replace("far", "fas")
		theme = 'dark'
		root.classList.replace("light", theme)
	}
	localStorage.setItem("theme", theme)
})