const guides = [{
		elem: ".random__btn",
		text: "1)Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate"
	}, {
		elem: ".choose__btn",
		text: "2)Lorem ipsum dolor sit amet. Lorem, ipsum."
	}, {
		elem: ".save__btn",
		text: "3)Lorem, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing."
	},
	{
		elem: ".toggle-hide-save",
		text: "4)Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minus."
	}
]

const createGuidePage = (guide, duration, prevIndex) => {
	console.log(guide)
	const guideCheckElem = document.querySelector(guide.elem)
	const text = guide.text
	guideCheckElem.scrollIntoView({
		behavior: "smooth",
		block: "center"
	})
	console.log(guides.length, prevIndex + 1)
	if (prevIndex >= 0 && (prevIndex + 1) <= guides.length) {
		const prevGuideCheckElem = document.querySelector(guides[prevIndex].elem)
		if (prevGuideCheckElem) prevGuideCheckElem.classList.remove("guide-check")
	}

	let guideTextElem = document.querySelector(".guide__text")
	if (!guideTextElem) {
		guideTextElem = document.createElement("p")
		guideTextElem.classList.add("guide__text")
		guideTextElem.style.top = (guideCheckElem.offsetTop + guideCheckElem.offsetHeight + 20) + "px"
		guideTextElem.innerText = text
		document.body.append(guideTextElem)
		setTimeout(() => guideTextElem.style.opacity = "1", duration)
	} else {
		guideTextElem.style.top = (guideCheckElem.offsetTop + guideCheckElem.offsetHeight + 20) + "px"
		guideTextElem.innerText = text
	}
	guideCheckElem.classList.add("guide-check")
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

const addListenerCloseGuide = (btn, bg, controlsWrapper, guideTextElem) => {
	btn.addEventListener("click", () => {
		bg.remove()
		controlsWrapper.remove()
		guideTextElem.remove()
		const guideCheckElem = document.querySelector(".guide-check")
		if (guideCheckElem && guideCheckElem.classList.contains("guide-check")) {
			guideCheckElem.classList.remove("guide-check")
		}
	})
}

const addListenerNav = (prevBtn, nextPrev) => {
	let index = 0

	prevBtn.addEventListener("click", () => {
		if (index - 1 >= 0) index--
		createGuidePage(guides[index], 0, index + 1)
	})
	nextPrev.addEventListener("click", () => {
		if (index + 2 <= guides.length) index++
		// console.log(index, guides.length, index + 2)
		createGuidePage(guides[index], 0, index - 1)
	})
}

const guideShow = (duration = 0) => {
	const header = document.querySelector(".header")
	const bg = addDarkenedBg(duration)
	header.style.position = "static"
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
	addListenerCloseGuide(skipBtn, bg, controlsWrapper, guideTextElem)
}