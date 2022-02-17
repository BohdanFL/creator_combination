const guides = [{
		elem: ".choose__btn",
		text: "Choose elements",
		showBy: ".random__change-mode"
	},
	{
		elem: ".choose__change-mode",
		text: "Switch mode between random and choose",
		showBy: ".random__change-mode"
	},
	{
		elem: ".choose__options",
		text: "Choose options",
		showBy: ".choose__options"
	},
	{
		elem: "label[for=choose-jump]",
		text: "Enable jump in choose list",
		showBy: ".random__change-mode"
	},
	{
		elem: "label[for=unique]",
		text: "Enable unique",
		showBy: ".random__change-mode"
	},
	{
		elem: ".random__btn",
		text: "Add random elements",
		showBy: ".choose__change-mode"
	},
	{
		elem: ".random__options",
		text: "Random options",
		showBy: ".random__options"
	},
	{
		elem: "label[for=count]",
		text: "Enable count"
	},
	{
		elem: "label[for=random-jump]",
		text: "Enable random jump"
	},
	{
		elem: "label[for=change-jump]",
		text: "Enable change jump"
	},
	{
		elem: "label[for=repeat-elem]",
		text: "Enable repeat elem"
	},
	{
		elem: ".save__btn",
		text: "Create save"
	},
	{
		elem: ".save .delete-all",
		text: "!Warning. Delete all saves"
	},
	{
		elem: ".toggle-hide-save",
		text: "Hide-show saves list"
	},
	{
		elem: ".save__list",
		text: "Here is your saves",
		showBy: ".toggle-hide-save"
	},
	{
		elem: ".save__item:first-child",
		text: "It's save, you can rename or delete it",
		showBy: ".save__btn"
	},
	{
		elem: ".save__item:first-child .save__context-menu",
		text: "Save context menu",
		showBy: ".save__item-opener"
	},
	{
		elem: ".elements .delete-all",
		text: "Here is your saves",
	},
	{
		elem: ".elements .change-all",
		text: "Here is your saves",
	}
]

const showGuideCheckElem = (elem, showBySelector) => {

	if (showBySelector) {
		let showByElem = document.querySelector(showBySelector)

		let isOpen = elem ? elem.getAttribute("open") : null
		if (isOpen !== null) isOpen = true

		if (elem) {
			if (elem.closest(".hide") ||
				elem.classList.contains("hide")) {
				showByElem.click()

				if (!isOpen) elem.open = true
			}
		} else {
			showByElem.click()
		}
	}
}

// NEEEEEED FIX
const createGuidePage = (guide, duration, prevIndex) => {
	const guideCheckElem = document.querySelector(guide.elem)
	showGuideCheckElem(guideCheckElem, guide.showBy)
	let guideTextElem = document.querySelector(".guide__text")
	const text = guide.text
	guideCheckElem.scrollIntoView({
		behavior: "smooth",
		block: "center"
	})
	let offsetTop = guideCheckElem.offsetTop
	let offsetLeft = guideCheckElem.offsetLeft
	let maxOffsetRight = document.body.offsetWidth - 20
	let offsetRight = guideTextElem ? offsetLeft + guideTextElem.offsetWidth : 0
	let positionStyle = getComputedStyle(guideCheckElem).position


	if (guideCheckElem.tagName === "LI") {
		guideCheckElem.parentNode.style.position = "static"
		offsetTop = guideCheckElem.parentNode.offsetTop
		offsetLeft = guideCheckElem.parentNode.offsetLeft
	}

	if (positionStyle !== "static" && positionStyle !== "relative") {
		offsetTop = guideCheckElem.offsetParent.offsetTop
		offsetLeft = guideCheckElem.offsetParent.offsetLeft
	}

	if (offsetLeft <= 20) offsetLeft = 20

	if (guideTextElem && offsetRight >= maxOffsetRight) {
		offsetLeft = maxOffsetRight - guideTextElem
	}

	if (prevIndex >= 0 && (prevIndex + 1) <= guides.length) {
		const prevGuideCheckElem = document.querySelector(guides[prevIndex].elem)
		if (prevGuideCheckElem) {
			prevGuideCheckElem.classList.remove("guide-check")
			prevGuideCheckElem.style = ""
		}
	}

	if (!guideTextElem) {
		guideTextElem = document.createElement("p")
		document.body.append(guideTextElem)
		setTimeout(() => guideTextElem.style.opacity = "1", duration)
	}

	guideTextElem.style.top = (offsetTop + guideCheckElem.offsetHeight + 20) + "px"
	guideTextElem.style.left = (offsetLeft) + "px"
	guideTextElem.innerText = text
	guideTextElem.classList.add("guide__text")

	if (positionStyle !== "static" && positionStyle !== "relative") {
		guideCheckElem.style.zIndex = "100"
		guideCheckElem.style.pointerEvents = "none"
	} else {
		guideCheckElem.classList.add("guide-check")
	}
	return guideTextElem
}

const createBottomGuide = (duration) => {
	const controlsWrapper = document.createElement("div")
	controlsWrapper.className = "guide__controls controls"

	controlsWrapper.innerHTML = `
	<button class="controls__btn-skip controls__btn btn">skip</button>
	<p class="controls__pages">
		<span class="controls__pages-current">1</span>
		/
		<span class="controls__pages-all">${guides.length}</span>
	</p>
	<div class="controls__nav">
		<button class="controls__nav-prev controls__btn btn fas fa-prev"></button>
		<button class="controls__nav-next controls__btn btn fas fa-next"></button>
	</div>
`
	document.body.append(controlsWrapper)
	setTimeout(() => controlsWrapper.style.opacity = "1", duration)

	const skipBtn = controlsWrapper.querySelector(".controls__btn-skip")
	const prevBtn = controlsWrapper.querySelector(".controls__nav-prev")
	const nextBtn = controlsWrapper.querySelector(".controls__nav-next")
	return {
		controlsWrapper,
		skipBtn,
		prevBtn,
		nextBtn
	}
}

const addListenerCloseGuide = (btn, bg, controlsWrapper, guideTextElem, header) => {
	btn.addEventListener("click", () => {
		window.addEventListener("mousedown", closeContextMenu);
		window.addEventListener("touchstart", closeContextMenu);
		bg.remove()
		controlsWrapper.remove()
		guideTextElem.remove()
		const guideCheckElem = document.querySelector(".guide-check")
		if (guideCheckElem && guideCheckElem.classList.contains("guide-check")) {
			guideCheckElem.classList.remove("guide-check")
		}
		if (guideCheckElem.tagName === "LI") {
			guideCheckElem.parentNode.style = ""
		}
		header.classList.remove("static")
	})
}

const addListenerNav = (prevBtn, nextPrev) => {
	let index = 0
	const currentPageElem = document.querySelector(".controls__pages-current")
	prevBtn.addEventListener("click", () => {
		if (index - 1 >= 0) index--
		currentPageElem.textContent = index + 1
		createGuidePage(guides[index], 0, index + 1)
	})
	nextPrev.addEventListener("click", () => {
		if (index + 2 <= guides.length) index++
		currentPageElem.textContent = index + 1
		createGuidePage(guides[index], 0, index - 1)
	})
}

const guideShow = (duration = 0) => {
	window.removeEventListener("mousedown", closeContextMenu);
	window.removeEventListener("touchstart", closeContextMenu);
	const header = document.querySelector(".header")
	const bg = addDarkenedBg(duration)
	header.classList.add("static")
	bg.style.zIndex = "11"
	document.body.style.overflow = "hidden"
	const {
		controlsWrapper,
		skipBtn,
		prevBtn,
		nextBtn
	} = createBottomGuide(duration)
	addListenerNav(prevBtn, nextBtn)
	const guideTextElem = createGuidePage(guides[0], duration)
	addListenerCloseGuide(skipBtn, bg, controlsWrapper, guideTextElem, header)
}