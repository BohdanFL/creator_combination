const dataElems = {
	e: [
		"360",
		"360 різнохватом",
		"360 нижнім",
		"360 схрестним",
		"360 схрестним різнохватом",
		"360 зворотнім",
		"360 рівний",
		"360×2",
		"360×3",
		"360×4",
		"360×5",
		"360×2 схрестним різнохватом",
		"360 халявний",
		"360×2 халявний",
		"360×3 халявний",
		"360 халявний верхніми",
		"360 халявний нижніми",
		"360 халявний схрестним різнохватом",
		"360 з упору",
		"360 з упору в різнохват",
		"360 з упору в схерстний різнохват",
		"360 з скльопки",
		"360 з локтів",
		"360 з кістей",
		"360 з маленької розкачки",
		"360 високий",
		"360 переднє",
		"360 переднє в імпульсо",
		"360 однією рукою",
		"540",
		"540 різнохватом",
		"540 схрестним різнохватом",
		"540 без санжировки",
		"540 зворотнім",
		"540 зворотнім без санжировки",
		"540×2",
		"540×3",
		"540×4",
		"540×5",
		"540×2 без санжировки",
		"540×3 без санжировки",
		"540 однією рукою",
		"540×2 однією рукою",
		"540 supra",
		"540×2 supra",
		"540 халявний",
		"Перельот кутом",
		"Перельот кутом верхнім",
		"Перельот кутом з луни",
		"Перельот з упору",
		"Перельот з упору верхнім",
		"Перельот з скльопки",
		"Перельот з скльопки верхнім",
		"Перельот з розкачки",
		"Перельот з розкачки верхнім",
		"Перельот з луни",
		"Перельот в імпульсо",
		"Перельот в імпульсо нижнім",
		"Олі",
		"Олі з скльопки",
		"Олі в упор",
		"Олі в упор з скльопки",
		"Олі зворотнє",
		"Олі зворотнє в упор",
		"Олі в упор на одну ногу",
		"Олі в упор на одну ногу з скльопки",
		"Супер олі",
		"Супер олі з скльопки",
		"Супер олі в сід",
		"Супер олі в сід з скльопки",
		"Мега олі",
		"Мега олі з скльопки",
		"Манкі з скльопки",
		"Манкі",
		"Стульчик",
		"Стульчик вперед",
		"Стульчик на одній",
		"Обороти смертника",
		"Сонечко",
		"Полу луна",
		"Луна",
		"Луна різнохватом",
		"Луна верхнім",
		"Пьоришко",
		"Сонечко в луну",
		"Сонечко зворотнім",
		"Чеські оборот",
		"Вихід з - під турніка",
		"Вихід з - під турніка верхнім",
		"Вихід з - під турніка в сід",
		"Вихід з - під турніка в сід верхнім",
		"Кід тарзан",
		"Чеський з сіду",
		"Чеський з сіду в сід",
		"Перельот ткачова",
		"Обороти на ногах",
		"Обороти на ногах в санжировку",
		"Обороти на ногах вперед нижнім",
		"Санжировка",
		"Санжировка вісімкою",
		"Санжировка різнохватом",
		"Санжировка нижнім",
		"Санжировка схрестним",
		"Санжировка зворотня(в нижній)",
		"Санжировка зворотням нижнім",
		"Х - виліт",
		"Х - виліт на 360",
		"Х - виліт на 180",
		"Х - виліт з скльопки",
		"Х - виліт в різнохват",
		"Гейнер в сід",
		"Внутрішній в зацеп",
		"Внутрішній з руских в зацеп",
		"Гробік на 180 в зацеп",
		"Гробік на 180 в упор",
		"Гробік з сіду на 180 в упор",
		"Скльопка",
		"Скльопка різнохватом",
		"Скльопка нижнім",
		"Скльопка схрестним",
		"Скльопка задня",
		"Скльопка задня верхнім",
		"Скльопка з розвороту на 180",
		"Скльопка з зворотньої санжировки"
	],
	j: [
		"Гейнер",
		"Гейнер нижнім",
		"Гейнер зворотнім",
		"Гейнер схрестним",
		"Гейнер різнохватом",
		"Гейнер схрестним різнохватом",
		"Гейнер на 180 різнохватом",
		"Гейнер на 180 схрестним різнохватом",
		"Гейнер з упору",
		"Гейнер з запригування",
		"Гейнер далекий",
		"Гейнер двійний",
		"Гейнер з чеських",
		"Гейнер на 90",
		"Гейнер на 180",
		"Вінт",
		"Бланш",
		"Бланш з упору",
		"Кумкват",
		"Кумкват на 180",
		"Кумкват вінтом",
		"Внутрішній",
		"Внутрішній двійний",
		"Внутрішній з руских",
		"Мортира",
		"Мортира з чеських",
		"Гробік",
		"Гробік на 180",
		"Гробік на 360",
		"Гробік на 540",
		"Гробік з сіду"
	]
}
let elemNums = []
let newDataElemsE = []
for (let i = 0; i < 11; i++) {
	dataElems.e.splice(i, 11)
}
const log = (...text) => console.log(...text)

const detectModile = /Mobile|Android|webOS|iP(ad|od|hone)|BlackBerry|BB|PlayBook|IEMobile|MeeGo|mini|Fennec|Windows Phone|Kindle|Silk|Opera Mini/
const randomBtn = document.querySelector('.random__simple-btn')
const customBtn = document.querySelector('.custom__simple-btn')
const elementsList = document.querySelector('.elements__list')
const deleteAllBtn = document.querySelector('.delete-all')
const changeAllBtn = document.querySelector('.change-all')
const enableOptionsBtn = document.querySelector('#enable')
const countEnableBtn = document.querySelector(".random__more #count")
const jumpEnableBtn = document.querySelector('#jump')
const changeJumpEnableBtn = document.querySelector('#change-jump')
const repeatElemBtn = document.querySelector('#repeat-elem')
let enableOptions = enableOptionsBtn.checked
let elems = JSON.parse(localStorage.getItem('saveElems')) || []
if (elems.a) {
	elems = elems.a
	localStorage.removeItem("saveElems")
	localStorage.setItem("saveElems", JSON.stringify(elems))
}
const optionsInRandom = JSON.parse(localStorage.getItem('optionsInRandom')) || {
	enableOptions: false,
	count: 1,
	jumpEnable: false,
	changeJumpEnable: false,
	repeatEnable: false
}

if (optionsInRandom) {
	enableOptionsBtn.checked = optionsInRandom.enableOptions
	countEnableBtn.value = optionsInRandom.count
	jumpEnableBtn.checked = optionsInRandom.jumpEnable
	changeJumpEnableBtn.checked = optionsInRandom.changeJumpEnable
	repeatElemBtn.checked = optionsInRandom.repeatEnable
}

const sortableOptions = {
	draggable: 'li',
	delay: {
		mouse: 100,
		drag: 0,
		touch: 300
	},
	distance: !detectModile.test(navigator.userAgent) * 10,
	classes: {
		'source:dragging': ['active'],
	}
}

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
let sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('drag:stopped', clearAndSaveElems);

const isRepeat = () => {
	let repeatNum = 0
	let elem = elementsList.childNodes
	const repeatElems = []
	const ignoreList = []

	for (let n = 0; n < elem.length; n++) {
		let addFirstElem = true;
		const isWas = ignoreList.indexOf(elem[n].textContent.trim())
		if (!ignoreList[isWas]) {
			elem.forEach((i, nI) => {
				if (elem[n].textContent.trim() && elem[nI].textContent.trim()) {
					if (n < nI) {
						if (elem[n].textContent.trim() === elem[nI].textContent.trim()) {
							let ignoreListNotRepeat = true
							ignoreList.forEach(ignoreItem => {
								if (ignoreItem === elem[n].textContent.trim()) {
									ignoreListNotRepeat = false
								}
							})
							if (ignoreListNotRepeat) {
								ignoreList.push(elem[n].textContent.trim())
							}
							repeatNum++
							if (addFirstElem) {
								repeatElems.push(elem[n])
								addFirstElem = false;
							}
							repeatElems.push(elem[nI])
						}
					}
				}
			});
		}
	}

	return {
		repeatElems,
		repeatNum,
		isRepeatBool: !!repeatNum
	}
}

const toggleClass = (e) => {
	e.target.closest(".elements__item").classList.toggle("check")
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

const enableRepeatElem = () => {
	enableOptions ? repeatEnable = repeatElemBtn.checked : repeatEnable = false
	const repeatObj = isRepeat()


	if (repeatEnable) {
		console.log("Enable check repeat");
		repeatObj.repeatElems.forEach(i => {
			i.classList.add("active")
		})
		if (repeatObj.isRepeatBool) {
			createTitle(100, "Виберіть елементи для заміни")

			sortable.destroy()
			sortable.destroyed = true

			const confirmBtn = document.querySelector("#confirm")
			const rejectBtn = document.querySelector("#reject")

			elementsList.addEventListener("mousedown", toggleClass)
			confirmBtn.addEventListener("click", confirmedRepeat, {
				once: true
			})
			rejectBtn.addEventListener("click", rejectedRepeat, {
				once: true
			})
		}
	}
}

const createTitle = (duration, titleText) => {
	if (document.querySelector(".popup__title") && document.querySelector(".popup__title-bg")) {
		document.querySelector(".popup__title").remove()
		document.querySelector(".popup__title-bg").remove()
	}
	const titleWrapper = document.createElement("h1")
	const titleBg = document.createElement("div")

	titleWrapper.classList.add("popup__title")
	titleBg.classList.add("popup__title-bg")

	titleWrapper.innerHTML = `
		${titleText}
		<h2 class="popup__subtitle">Готові здійснити заміну?</h2>
		<div class="popup__btns">
			<button class="popup__btn btn" id="confirm" disabled>Так</button>
			<button class="popup__btn btn" id="reject">Ні</button>
		</div>
	`

	document.body.appendChild(titleWrapper)
	document.body.appendChild(titleBg)

	setTimeout(() => {
		titleWrapper.style.top = "20px"
		titleBg.style.opacity = ".5"
	}, duration)
}

const clearStyle = () => {
	let titleWrapper = document.querySelector(".popup__title")
	let titleBg = document.querySelector(".popup__title-bg")
	if (titleWrapper && titleBg) {
		titleWrapper.style.top = "-100px"
		titleBg.style.opacity = "0"
		setTimeout(() => {
			titleWrapper.remove()
			titleBg.remove()
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

const rejectedRepeat = () => {
	log("reject")
	elementsList.removeEventListener("mousedown", toggleClass)
	clearStyle()
	repeatElemBtn.checked = false
	if (sortable.destroyed) {
		sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('drag:stopped', clearAndSaveElems);
		sortable.destroyed = false
	}
}

const confirmedRepeat = () => {
	console.log("confirm")
	elementsList.childNodes.forEach(i => {
		if (i.textContent.trim()) {
			if (i.classList.contains("check")) {
				createNewDataElems(1, 1000, false, i.querySelector(".elements__item-text"))
				setTimeout(() => {
					clearStyle()
				}, 1000);
			}
		}
	})
	elementsList.removeEventListener("mousedown", toggleClass)
}

const checkEnableOption = () => {
	enableOptions = enableOptionsBtn.checked
	if (!enableOptions) {
		countEnableBtn.disabled = true
		jumpEnableBtn.disabled = true
		changeJumpEnableBtn.disabled = true
		repeatElemBtn.disabled = true
		clearStyle()
		repeatElemBtn.removeEventListener('click', enableRepeatElem)
	} else {
		countEnableBtn.disabled = false
		jumpEnableBtn.disabled = false
		changeJumpEnableBtn.disabled = false
		repeatElemBtn.disabled = false
		if (repeatElemBtn.checked) {
			enableRepeatElem()
		}
		repeatElemBtn.addEventListener('click', enableRepeatElem)
	}
	optionsInRandom.enableOptions = enableOptions
	localStorage.setItem("optionsInRandom", JSON.stringify(optionsInRandom))
}
checkEnableOption()

const checkRepeatitons = (numIterate, timeout, addRandom, changingElem, checkElems) => {
	let repeat = 0
	let conditionNum = 0
	let elem = elementsList.childNodes
	if (!changingElem) {
		for (let n = 0; n < elem.length; n++) {
			elem.forEach((i, nI) => {
				if (addRandom) {
					if (nI === 0 && n === 0) {
						iterate(numIterate, elementsList.querySelector(".elements__item:last-child .elements__item-text"), newDataElemsE, checkElems, false, false)
					}
				}
				if (n < nI) {
					if (elem[n].textContent.trim() === elem[nI].textContent.trim()) {
						repeat++
						if (addRandom) {
							iterate(numIterate, elementsList.querySelector(".elements__item:last-child .elements__item-text"), newDataElemsE, checkElems, false, false)
						} else {
							iterate(numIterate, elem[nI].querySelector(".elements__item-text"), newDataElemsE, checkElems, false, false)
						}
					}
				}
			});
		}
	} else {
		const only = iterate(numIterate, changingElem, newDataElemsE, checkElems, false, false, 1)
		conditionNum = 1
		timeout = 1000
		setTimeout(() => {
			elem.forEach((i) => {
				if (i.textContent.trim()) {
					if (only === i.textContent.trim()) {
						repeat++
					}
				}
			});
		}, 1000)
	}
	setTimeout(() => {
		if (repeat > conditionNum) {
			createNewDataElems(31, 1, addRandom, changingElem, checkElems)
		} else {
			clearAndSaveElems()
		}
	}, timeout)
}

const createNewDataElems = (numIterate = 1, timeout = 1000, addRandom = false, changingElem, checkElems = dataElems.e) => {
	elemNums = [];
	newDataElemsE = [];
	checkElems.forEach((_, n) => elemNums.push(n))
	checkElems.forEach((i, n) => {
		let repeat = -1
		elementsList.childNodes.forEach((i2) => {
			if (i2.textContent.trim() === i) {
				repeat++
				if (!repeat > 0) {
					elemNums.splice(elemNums.indexOf(n), 1)
				}
			}
		});
	})
	elemNums.forEach(i => {
		newDataElemsE.push(checkElems[i])
	})
	checkRepeatitons(numIterate, timeout, addRandom, changingElem, checkElems)
	return newDataElemsE
}

const iterate = (i, elem, array, iterableArr = array, change = false, save = true, duration = 20, only) => {
	// const iterate = (i, opt) => {
	return new Promise((resolve) => {
		const interval = setInterval(() => {
			if (i === 1 || i === 31) {
				only = array[random(array)];
				console.log("iterate");
			}
			i++;
			elem.textContent = iterableArr[random(iterableArr)]
			sortable.destroy()

			if (i > 30) {
				clearInterval(interval);

				if (!change) {
					elem.textContent = only
					elems.push(elem.textContent)
				} else {
					const findText = elem.textContent
					for (const key in elementsList.children) {
						const elem = elementsList.children[key];
						if (typeof elem === "object") {
							if (elem.textContent.trim() === findText) {
								elems.splice(key, 1, findText)
							}
						}
					}
				}

				sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('drag:stopped', clearAndSaveElems);
				if (save) {
					localStorage.setItem('saveElems', JSON.stringify(elems))
				}

				resolve(only);
			}
		}, duration);
	});
}

const addRandomElem = () => {
	const sumElem = elementsList.children.length + parseInt(countEnableBtn.value)
	if (elementsList.children.length >= 99 || countEnableBtn.value > 99 || sumElem > 99) {
		alert('Ліміт елементів(99)')
		if (enableOptions) {
			countEnableBtn.value = 99 - elementsList.children.length
		}
		return
	}

	enableOptions ? countValue = parseInt(countEnableBtn.value) : countValue = 1
	enableOptions ? jumpEnable = jumpEnableBtn.checked : jumpEnable = false
	enableOptions ? repeatEnable = repeatElemBtn.checked : repeatEnable = false
	let arr = dataElems.e
	for (let i = 0; i < countValue; i++) {
		if (jumpEnable) {
			if (i === (countValue - 1)) {
				arr = dataElems.j
			}
		}
		createLi('')
		if (repeatEnable) {
			createNewDataElems(1, 1000, true, null, arr)
		} else {
			iterate(1, elementsList.querySelector(".elements__item:last-child .elements__item-text"), arr).then(r => console.log(r))
		}
	}

	elementsList.scrollTo({
		behavior: "smooth",
		left: 0,
		top: elementsList.scrollHeight
	})
}

const deleteAllList = () => {
	// let confirm = prompt("You know what you do? If yes, write YES", "NO")
	// if (confirm === "YES") {
	elementsList.innerHTML = ''
	elems = []
	localStorage.setItem('saveElems', JSON.stringify(elems))
	// } else if (confirm === "NO" || confirm === null) {
	// 	return
	// } else {
	// 	deleteAllList()
	// }
}

const changeAllList = () => {
	changeAllBtn.disabled = true
	changeAllBtn.textContent = "Disabled"
	setTimeout(() => {
		changeAllBtn.disabled = false
		changeAllBtn.textContent = "Change all"
	}, 1000)
	const elementsItemList = elementsList.querySelectorAll(".elements__item .elements__item-text")
	elems = []
	enableOptions ? jumpEnable = jumpEnableBtn.checked : jumpEnable = false
	enableOptions ? repeatEnable = repeatElemBtn.checked : repeatEnable = false

	let arr = dataElems.e
	elementsItemList.forEach((item, num) => {
		if (jumpEnable) {
			if (num === (elementsList.children.length - 1)) {
				arr = dataElems.j
			}
		}
		iterate(1, item, arr)
		if (repeatEnable) {
			createNewDataElems()
		}
	})
}

const deletingElem = (elem) => {
	console.log('DELETE');
	const parent = elem.parentNode.parentNode.parentNode
	parent.remove()
	clearAndSaveElems()
}

const changingElem = (elem) => {
	console.log('CHANGE');
	enableOptions ? changeJumpEnable = changeJumpEnableBtn.checked : changeJumpEnable = false
	enableOptions ? repeatEnable = repeatElemBtn.checked : repeatEnable = false

	if (repeatEnable) {
		createNewDataElems(1, 1000, false, elem.parentNode.previousSibling.previousSibling)
		return
	}

	if (changeJumpEnable) {
		iterate(1, elem.parentNode.previousSibling.previousSibling, dataElems.j, dataElems.j, true)
	} else {
		iterate(1, elem.parentNode.previousSibling.previousSibling, dataElems.e, dataElems.e, true)
	}

}

const addBtnToLi = (li) => {
	let deleteElemBtn = li.querySelector('.fas.fa-minus-circle')
	let changeElemBtn = li.querySelector('.fas.fa-sync-alt')

	deleteElemBtn.addEventListener('click', () => deletingElem(deleteElemBtn))
	changeElemBtn.addEventListener('click', () => changingElem(changeElemBtn))
}

const createLi = (text) => {
	const li = document.createElement('li')
	li.classList.add('elements__item')
	li.innerHTML = `<div class="elements__item-wrapper">
                    <span class="elements__item-text">${text}</span>  
                    <div class="elements__item-btns">
                        <i class="fas fa-sync-alt"></i> 
                        <i class="fas fa-minus-circle"></i>
                    </div>
                </div>`
	elementsList.appendChild(li)

	addBtnToLi(li)

	return li
}

elems ? elems.forEach(elem => createLi(elem)) : false

randomBtn.addEventListener('click', addRandomElem);
customBtn.addEventListener('click', () => alert("In coming..."));
deleteAllBtn.addEventListener('click', deleteAllList);
changeAllBtn.addEventListener('click', changeAllList)
enableOptionsBtn.addEventListener('click', checkEnableOption)
countEnableBtn.addEventListener("input", () => {
	if (countEnableBtn.value.length > 2) {
		countEnableBtn.value = countEnableBtn.value.substring(0, countEnableBtn.value.length - 1)
	}
	countEnableBtn.value < 1 ? optionsInRandom.count = 1 : optionsInRandom.count = countEnableBtn.value
	localStorage.setItem("optionsInRandom", JSON.stringify(optionsInRandom))
})
jumpEnableBtn.addEventListener("click", () => {
	optionsInRandom.jumpEnable = jumpEnableBtn.checked
	localStorage.setItem("optionsInRandom", JSON.stringify(optionsInRandom))
})
changeJumpEnableBtn.addEventListener("click", () => {
	optionsInRandom.changeJumpEnable = changeJumpEnableBtn.checked
	localStorage.setItem("optionsInRandom", JSON.stringify(optionsInRandom))
})
repeatElemBtn.addEventListener("click", () => {
	optionsInRandom.repeatEnable = repeatElemBtn.checked
	localStorage.setItem("optionsInRandom", JSON.stringify(optionsInRandom))
})

//` TODO:
/**
 * * добавити перевірку наявності елементів для добавлення і замінни без повтору
 * * запускати функції які потребую запускатись після iterate через new Promise().then()
 * * створити список template, створити функціонал створення, додавання, зберігання, переміщення і змінення templates 
 * * створити список saves, створити функціонал створення, переключення, зміни назви, видалення, редагування і переміщення
 * * добавити гайд(текстовий) в правому-верхньому куті або для кожного налаштування іконки-гайди
 * 
 */