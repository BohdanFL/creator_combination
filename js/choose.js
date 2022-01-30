const createRangeGroup = (range) => {
	const arr = []
	min = parseInt(range.split('-')[0])
	max = parseInt(range.split('-')[1])
	for (let i = min; i <= max; i++) {
		arr.push(i)
	}
	return arr
}

const createChoseArr = (list) => {
	const choseArr = []
	const listItems = list.querySelectorAll('.choose__item')
	listItems.forEach(item => {
		const btn = item.querySelector('.far.fa-square')

		item.addEventListener("click", () => {
			const itemText = item.textContent.trim() || false

			if (btn.classList.contains("fa-square") && itemText) {
				btn.className = "fas fa-check-square"
				choseArr.push(itemText)
			} else {
				btn.className = "far fa-square"
				choseArr.splice(choseArr.indexOf(itemText), 1)
			}
		})
	})
	return choseArr
}

const insertGroups = (groups, list) => {
	groups.forEach((obj) => {
		let groupItems = ''
		let range
		const groupName = Object.keys(obj)[0]

		for (const name in obj) {
			const group = obj[name];
			range = createRangeGroup(group[0])
		}

		range.forEach((i) => {
			groupItems += `
		<li class="choose__item">
			${testElems.e[i]}
			<i class="far fa-square"></i>
		</li>
		`
		})

		list.innerHTML += `
		<details class="choose__sublist-wrapper">
			<summary>${groupName}</summary>
			<ol class="choose__sublist">
				${groupItems}
			</ol>
		</details>
	`
	})
}

const searchInList = (input, sublists, list) => {
	let searchText = input.value.toLowerCase().trim()
	if (input.value.length) {
		sublists.forEach(list => {
			list.closest(".choose__sublist-wrapper").open = true

			let items = list.querySelectorAll(".choose__item")
			items.forEach(item => {
				let text = item.textContent.toLowerCase().trim()
				if (!text.startsWith(searchText)) {
					item.style.display = "none"
				} else {
					item.style = ""
				}
			})
		})
	} else {
		const items = list.querySelectorAll(".choose__item")
		items.forEach(item => {
			item.style = ""
		})
		sublists.forEach(list => {
			list.closest(".choose__sublist-wrapper").open = false
		})
	}
}

const createChooseList = (groups, duration) => {
	const wrapper = document.createElement('div')
	wrapper.classList.add('choose__wrapper')
	wrapper.innerHTML = `
	<div class="choose__inner">
		<input type="search" name="search" id="search" placeholder="Пошук...">
		<ol class="choose__list list">
		</ol>
	</div>
	`
	document.body.append(wrapper)

	const list = wrapper.querySelector('.choose__list')

	insertGroups(groups, list)

	const sublists = list.querySelectorAll(".choose__sublist")
	const searchInput = wrapper.querySelector('#search')
	searchInput.addEventListener("input", () => searchInList(searchInput, sublists, list))

	const choseArr = createChoseArr(list)

	setTimeout(() => wrapper.style.opacity = "1", duration)
	return {
		wrapper,
		choseArr
	}
}

const closeChooseWindow = () => {
	const bg = document.querySelector(".dark-bg"),
		wrapper = document.querySelector(".choose__wrapper"),
		closeBtn = document.querySelector(".choose__btn-close"),
		doneBtn = document.querySelector(".choose__btn-apply")
	if (bg) bg.remove()
	if (wrapper) wrapper.remove()
	if (closeBtn) closeBtn.remove()
	if (doneBtn) doneBtn.remove()
}

const insertItemsInList = (choseArr) => {
	if (!choseArr.length) {
		createTitle("Нічого не вибрано", 200, 2000);
		return
	}

	choseArr.forEach(i => {
		const li = document.createElement('li')
		li.classList.add('elements__item')
		li.innerHTML = `
		<div class="elements__item-wrapper">
			<span class="elements__item-text">${i}</span>  
			<i title="Опції" class="elements__item-opener context-menu__opener fas fa-ellipsis-v"></i>
			<div class="elements__context-menu context-menu hide">
				<i class="fas fa-sync-alt context-menu__btn">
					<span class="context-menu__btn-name">Змінити</span>
				</i> 
				<i class="fas fa-minus-circle context-menu__btn">
					<span class="context-menu__btn-name">Видалити</span>
				</i>
			</div>
		</div>`
		elems.push(i)
		elementsList.appendChild(li)
	})
	closeChooseWindow()

	localStorage.setItem("elems", JSON.stringify(elems))
	createTitle("Успішно додано!", 200, 2000);
}

const addCloseBtn = (duration) => {
	const btn = document.createElement('i')
	btn.className = 'fas fa-times choose__btn-close'
	document.body.append(btn)

	setTimeout(() => btn.style.opacity = "1", duration)
	btn.addEventListener('click', closeChooseWindow);
}

const addDoneBtn = (choseArr, duration) => {
	const btn = document.createElement('button')
	btn.className = 'btn choose__btn-apply'
	btn.textContent = 'Apply'
	document.body.append(btn)

	setTimeout(() => btn.style.opacity = "1", duration)
	btn.addEventListener('click', () => insertItemsInList(choseArr));
}

const openChooseWindow = (duration = 0) => {
	addDarkenedBg(duration)
	const {
		wrapper,
		choseArr
	} = createChooseList(dataElems.groups, duration)
	addCloseBtn(duration)
	addDoneBtn(choseArr, duration)
}