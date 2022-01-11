const createTitle = (titleText, duration = 200, clearDuration = 0, createBg) => {
	if (document.querySelector(".popup")) {
		document.querySelector(".popup").remove();
	} else if (document.querySelector(".popup-bg")) {
		document.querySelector(".popup-bg").remove();
	}

	const titleWrapper = document.createElement("div");
	titleWrapper.classList.add("popup");
	let titleBg;
	if (createBg) {
		titleBg = document.createElement("div");
		titleBg.classList.add("popup-bg");
	}

	titleWrapper.innerHTML = `<h1 class="popup__title">${titleText}</h1>`;

	document.body.appendChild(titleWrapper);
	if (createBg) document.body.appendChild(titleBg);

	setTimeout(() => {
		if (window.innerWidth <= 400) {
			titleWrapper.style.top = "5vw";
		} else {
			titleWrapper.style.top = "10px";
		}
		if (createBg) titleBg.style.opacity = ".5";
	}, duration);
	if (clearDuration) {
		setTimeout(() => {
			titleWrapper.style.top = "-100px";
			setTimeout(() => titleWrapper.remove(), 200)
		}, clearDuration);
	}

	return titleWrapper;
};

const createPrompt = (title, duration) => {
	const wrapper = createTitle(title, duration)
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

const clearStyle = () => {
	let titleWrapper = document.querySelector(".popup")
	let titleBg = document.querySelector(".popup-bg")

	if (titleWrapper) {
		titleWrapper.style.top = "-100px"
		if (titleBg) titleBg.style.opacity = "0"
		if (selectAll) selectAll.classList.add("hide")
		if (unselectAll) unselectAll.classList.add("hide")
		if (elementsList.classList.contains("elements__list-active")) elementsList.classList.remove("elements__list-active")
		setTimeout(() => {
			titleWrapper.remove()
			if (titleBg) titleBg.remove()
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