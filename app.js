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

const log = (text) => console.log(text)

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

let elems = JSON.parse(localStorage.getItem('saveElems')) || {
	a: []
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

const random = (array) => Math.floor(Math.random() * array.length)
const sortableOptions = {
	draggable: 'li',
	distance: 10,
	classes: {
		'source:dragging': ['text-green'],
	}
}

const clearAndSaveElems = () => {
	elems = {
		a: []
	}
	for (let i = 0; i < elementsList.childNodes.length; i++) {
		if (elementsList.childNodes[i].textContent.trim()) {
			elems.a.push(elementsList.childNodes[i].textContent.trim())
		}
	}
	localStorage.setItem("saveElems", JSON.stringify(elems))
}
let sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('drag:stopped', clearAndSaveElems).sensors[1].delay.touch = 300

const enableRepeatElem = () => {
	enableOptions ? repeatEnable = repeatElemBtn.checked : repeatEnable = false
	const repeatObj = isRepeat()
	if (repeatEnable) {
		console.log("Enable check repeat");
		if (repeatObj.isRepeatBool) {
			createTitle(200, "Виберіть елементи для заміни")
		}
		// createNewDataElems()
	} else {
		if (repeatObj.isRepeatBool) {
			if (document.querySelector(".popup-title")) {
				document.querySelector(".popup-title").style.top = "-100px"
				setTimeout(() => {
					document.querySelector(".popup-title").remove()
				}, 200)
			}
		}
		console.log("Disable check repeat");
	}
	return repeatEnable
}
const checkEnableOption = () => {
	enableOptions = enableOptionsBtn.checked
	if (!enableOptions) {
		countEnableBtn.disabled = true
		jumpEnableBtn.disabled = true
		changeJumpEnableBtn.disabled = true
		repeatElemBtn.disabled = true
		repeatElemBtn.removeEventListener('click', enableRepeatElem)
	} else {
		countEnableBtn.disabled = false
		jumpEnableBtn.disabled = false
		changeJumpEnableBtn.disabled = false
		repeatElemBtn.disabled = false
		repeatElemBtn.addEventListener('click', enableRepeatElem)
	}
	optionsInRandom.enableOptions = enableOptions
	localStorage.setItem("optionsInRandom", JSON.stringify(optionsInRandom))
}
checkEnableOption()
enableOptionsBtn.addEventListener('click', checkEnableOption)

const isRepeat = () => {
	let repeat = 0
	let elem = elementsList.childNodes
	const repeatElems = []
	for (let n = 0; n < elem.length; n++) {
		elem.forEach((i, nI) => {
			if (n < nI) {
				if (elem[n].textContent.trim() === elem[nI].textContent.trim()) {
					repeat++
					repeatElems.push(elem[n])
					repeatElems.push(elem[nI])
					i.classList.add("text-green")
				}
			}
		});
	}
	return {
		repeatElems,
		repeat,
		isRepeatBool: !!repeat
	}
}

const createTitle = (duration, titleText) => {
	const titleWrapper = document.createElement("div")
	titleWrapper.classList.add("popup-title")
	titleWrapper.textContent = titleText
	document.body.appendChild(titleWrapper)
	setTimeout(() => {
		titleWrapper.style.top = "20px"
	}, duration)
}

const checkRepeatitons = (numIterate, timeout, addRandom, changingElem, checkElems) => {
	let repeat = 0
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
						// createTitle(1000, "Виберіть елементи для заміни")
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
		// for (let n = 0; n < elem.length; n++) {
		// 	elem.forEach((i, nI) => {
		// 		if (elem[n].textContent.trim() === elem[nI].textContent.trim()) {
		// 			console.log(newDataElemsE);
		iterate(numIterate, changingElem, newDataElemsE, checkElems, false, false)
		// 		}
		// 	});
		// }
	}
	setTimeout(() => {
		if (repeat > 0) {
			createNewDataElems(30, 10)
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
		elementsList.childNodes.forEach((i2, n2) => {
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
	checkRepeatitons(numIterate, timeout, addRandom, changingElem)
	return newDataElemsE
}



const iterate = (i, elem, array, iterableArr = array, change = false, save = true, only) => {
	// const iterate = (i, opt) => {
	if (i === 1) {
		console.log("iterate");
	}
	if (i === 30) {
		only = array[random(array)]
	}
	elem.textContent = iterableArr[random(iterableArr)]
	sortable.destroy()
	if (i < 30) {
		setTimeout(() => {
			iterate(i + 1, elem, array, iterableArr, change, save, only)
			// iterate(i + 1, opt)
		}, 30);
	} else {
		if (!change) {
			elem.textContent = only
			elems.a.push(elem.textContent)
		} else {
			const findText = elem.textContent
			for (const key in elementsList.children) {
				const elem = elementsList.children[key];
				if (typeof elem === "object") {
					if (elem.textContent.trim() === findText) {
						elems.a.splice(key, 1, findText)
					}
				}
			}
		}
		sortable = new Sortable.default(document.querySelector('ol.elements__list'), sortableOptions).on('drag:stopped', clearAndSaveElems).sensors[1].delay.touch = 300
		if (save) {
			localStorage.setItem('saveElems', JSON.stringify(elems))
		}
	}
	// return {only, elem}
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
			iterate(1, elementsList.querySelector(".elements__item:last-child .elements__item-text"), arr)
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
	elems = {
		a: []
	}
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
	elems = {
		a: []
	}
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
	const findText = parent.textContent.trim()
	elems.a.find((item, num) => {
		if (findText === item) {
			elems.a.splice(num, 1)
			localStorage.setItem('saveElems', JSON.stringify(elems))
		}
	})
}

const changingElem = (elem) => {
	console.log('CHANGE');
	enableOptions ? changeJumpEnable = changeJumpEnableBtn.checked : changeJumpEnable = false
	enableOptions ? repeatEnable = repeatElemBtn.checked : repeatEnable = false

	if (changeJumpEnable) {
		iterate(1, elem.parentNode.previousSibling.previousSibling, dataElems.j, dataElems.j, true)
	} else {
		iterate(1, elem.parentNode.previousSibling.previousSibling, dataElems.e, dataElems.e, true)
	}
	if (repeatEnable) {
		createNewDataElems(1, 1000, false, elem.parentNode.previousSibling.previousSibling)
	}
}

const addBtnToLi = (li) => {
	let deleteElemBtn = li.querySelector('.fas.fa-minus-circle')
	let changeElemBtn = li.querySelector('.fas.fa-sync-alt')

	const deletingElemEvent = () => deletingElem(deleteElemBtn)
	const changingElemEvent = () => changingElem(changeElemBtn)

	deleteElemBtn.addEventListener('click', deletingElemEvent)
	changeElemBtn.addEventListener('click', changingElemEvent)
}

const createLi = (text) => {
	const li = document.createElement('li')
	li.classList.add('elements__item')
	li.innerHTML = `<div class="elements__item-wrapper">
                    <span class=\"elements__item-text\">${text}</span>  
                    <div>
                        <i class=\"fas fa-sync-alt\"></i> 
                        <i class=\"fas fa-minus-circle\"></i>
                    </div>
                </div>`
	elementsList.appendChild(li)

	addBtnToLi(li)

	return li
}

elems ? elems.a.forEach(elem => createLi(elem)) : false

randomBtn.addEventListener('click', addRandomElem);
customBtn.addEventListener('click', () => alert("In coming..."));
deleteAllBtn.addEventListener('click', deleteAllList);
changeAllBtn.addEventListener('click', changeAllList)


//` TODO:
/**
 * * changingElem: 100% був заміненний іншим елементом
 * * CSS: застилізувати інпути настройок
 * * changingElem: коли true repeatEnable, функція createNewDataElems має змінювати тільки змінюваний елемент; написати нову фукцію яка буде виконувати попередню задачу
 * *
 */