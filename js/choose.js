const createRangeGroup = (range) => {
	const arr = []
	min = parseInt(range.split('-')[0])
	max = parseInt(range.split('-')[1])
	for (let i = min; i <= max; i++) {
		arr.push(i)
	}
	return arr
}

const sendGroup = (groups) => {
	let rangeArr
	groups.forEach((obj) => {
		for (const name in obj) {
			const group = obj[name];
			rangeArr = createRangeGroup(group[0])
		}
		console.log(rangeArr)
	})
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

	groups.forEach((obj) => {
		let groupItems = ''
		let range
		const groupName = Object.keys(obj)[0]

		for (const name in obj) {
			const group = obj[name];
			range = createRangeGroup(group[0])
		}

		range.forEach((i) => {
			groupItems += `<li class="choose__item">${testElems.e[i]}</li>`
		})

		list.innerHTML += `
			<details class="choose__list-wrapper">
				<summary>${groupName}</summary>
				<ol class="choose__sublist">
					${groupItems}
				</ol>
			</details>
		`
	})

	setTimeout(() => wrapper.style.opacity = "1", duration)
	return wrapper
}

const closeChooseWindow = (list, bg, btn) => {
	bg.remove()
	list.remove()
	btn.remove()
}

const addCloseBtn = (list, bg, duration) => {
	const btn = document.createElement('i')
	btn.className = 'fas fa-times close-btn'
	document.body.append(btn)
	setTimeout(() => btn.style.opacity = "1", duration)
	btn.addEventListener('click', () => closeChooseWindow(list, bg, btn));
}

const openChooseWindow = (duration = 0) => {
	const bg = addDarkenedBg(duration)
	const list = createChooseList(dataElems.groups, duration)
	addCloseBtn(list, bg, duration)
}