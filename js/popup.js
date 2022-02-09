const addDarkenedBg = (duration) = () => {
	if (document.querySelector(".popup__bg")) return

	let bg = document.createElement("div");
	bg.classList.add("popup__bg");
	document.body.appendChild(bg);

	setTimeout(() => bg.style.opacity = ".5", duration);
	return bg
}

const createPopup = (text, duration = 200, clearDuration = 2000, createBg, fromPrompt = false) => {
	if (clearDuration) clearDuration += duration
	if (document.querySelector(".popup") && !fromPrompt) {
		return
	} else if (document.querySelector(".popup")) {
		document.querySelector(".popup").remove()
	}

	const wrapper = document.createElement("div");
	wrapper.classList.add("popup");
	wrapper.innerHTML = `<h1 class="popup__title">${text}</h1>`;
	document.body.appendChild(wrapper);
	if (createBg) addDarkenedBg(duration)

	setTimeout(() => {
		const headerHeight = document.querySelector(".header").offsetHeight
		const marginTop = headerHeight + 10
		wrapper.style.top = marginTop + "px";
	}, duration);
	if (clearDuration) {
		setTimeout(() => {
			wrapper.style.top = "-100px";
			setTimeout(() => wrapper.remove(), 200)
		}, duration + clearDuration);
	}

	return wrapper;
};

const createPrompt = (title, duration, clearDuration) => {
	const wrapper = createPopup(title, duration, clearDuration, false, true)
	wrapper.innerHTML += `
	<div class="popup__btns">
		<button class="popup__btn btn" id="prompt-confirm">ОК</button>
		<button class="popup__btn btn" id="prompt-reject">Скасувати</button>
	</div>`
	const confirmBtn = wrapper.querySelector('#prompt-confirm')
	const rejectBtn = wrapper.querySelector('#prompt-reject')
	return {
		confirmBtn,
		rejectBtn
	}
}

const clearStyle = (deleteBg = true) => {
	let wrapper = document.querySelector(".popup")
	let bg = document.querySelector(".popup__bg")

	if (wrapper) {
		wrapper.style.top = "-100px"
		if (bg && deleteBg) {
			bg.style.opacity = "0"
		}
		if (menuBtn) menuBtn.classList.add("hide")
		if (elementsList.classList.contains("elements__list-active")) elementsList.classList.remove("elements__list-active")
		setTimeout(() => {
			wrapper.remove()
			if (bg && deleteBg) bg.remove()
		}, 200)

		elementsList.childNodes.forEach((i) => {
			if (i.textContent.trim()) {
				if (i.classList.contains("active")) {
					i.classList.remove("active")
				}
				if (i.classList.contains("check")) {
					i.classList.remove("check")
				}
			}
		});
	}
}