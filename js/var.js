let dataElems = [],
	elemNums = [],
	newDataElemsE = [],
	elemWidth, btnEventStyle, btnChangeStyle, btnDeleteStyle

const MOBILE_DEVICE = /Mobile|Android|webOS|iP(ad|od|hone)|BlackBerry|BB|PlayBook|IEMobile|MeeGo|mini|Fennec|Windows Phone|Kindle|Silk|Opera Mini/

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

const selectAll = document.querySelector(".select-all")
const unselectAll = document.querySelector(".unselect-all")

let enableOptions = enableOptionsBtn.checked

let elems = JSON.parse(localStorage.getItem('saveElems')) || []

const optionsInRandom = JSON.parse(localStorage.getItem('optionsInRandom')) || {
	enableOptions: false,
	count: 1,
	jumpEnable: false,
	changeJumpEnable: false,
	repeatEnable: false
}
const sortableOptions = {
	draggable: 'li',
	delay: {
		mouse: 300,
		drag: 0,
		touch: 300
	},
	plugins: [SortAnimation.default],
	sortAnimation: {
		duration: 200,
		easingFunction: 'linear',
	},
	classes: {
		'source:dragging': ["draggable-source--is-dragging", 'active'],
		'source:placed': ["draggable-source--placed", 'active'],
		// 'mirror': ["draggable-mirror", "active"]
	}
}
// draggable-container--is-dragging