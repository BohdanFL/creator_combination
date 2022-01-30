let dataElems = [],
	elemNums = [],
	newDataElemsE = [],
	elemWidth

const MOBILE_DEVICE = /Mobile|Android|webOS|iP(ad|od|hone)|BlackBerry|BB|PlayBook|IEMobile|MeeGo|mini|Fennec|Windows Phone|Kindle|Silk|Opera Mini/

const randomBtn = document.querySelector('.random__simple-btn')
const chooseBtn = document.querySelector('.choose__simple-btn')
const saveBtn = document.querySelector('.save__simple-btn')

const elementsList = document.querySelector('.elements__list')
const saveList = document.querySelector('.save__list')

const elementsDeleteAllBtn = document.querySelector('.elements__menu-item.delete-all')
const changeAllBtn = document.querySelector('.elements__menu-item.change-all')

const saveDeleteAllBtn = document.querySelector('.save__menu-item.delete-all')

const enableOptionsBtn = document.querySelector('#enable')

const countEnableBtn = document.querySelector(".random__more #count")
const randomJumpEnableBtn = document.querySelector('#random-jump')
const changeJumpEnableBtn = document.querySelector('.random #change-jump')
const repeatElemBtn = document.querySelector('.random #repeat-elem')

const chooseJumpEnableBtn = document.querySelector('#choose-jump')

const selectAll = document.querySelector(".select-all")
const unselectAll = document.querySelector(".unselect-all")

let elems = JSON.parse(localStorage.getItem('elems')) || []
let saves = JSON.parse(localStorage.getItem('saves')) || []

const optionsInRandom = JSON.parse(localStorage.getItem('optionsInRandom')) || {
	count: 1,
	randomJumpEnable: false,
	changeJumpEnable: false,
	repeatEnable: false,
	chooseJumpEnable: false
}
// const optionsInChoose = JSON.parse(localStorage.getItem('optionsInRandom')) || {
// }
const sortableOptions = {
	draggable: 'li:not(.jump)',
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
		'source:placed': ["draggable-source--placed", 'active']
	}
}