let dataElems = [],
	elemNums = [],
	newDataElemsE = [],
	elemWidth

const MOBILE_DEVICE = /Mobile|Android|webOS|iP(ad|od|hone)|BlackBerry|BB|PlayBook|IEMobile|MeeGo|mini|Fennec|Windows Phone|Kindle|Silk|Opera Mini/

const randomBtn = document.querySelector('.random__btn')
const chooseBtn = document.querySelector('.choose__btn')
const saveBtn = document.querySelector('.save__btn')

const elementsList = document.querySelector('.elements__list')
const saveList = document.querySelector('.save__list')

const elementsDeleteAllBtn = document.querySelector('.elements__menu-item.delete-all')
const changeAllBtn = document.querySelector('.elements__menu-item.change-all')

const saveDeleteAllBtn = document.querySelector('.save__menu-item.delete-all')

const countAddRandomElem = document.querySelector("#count")
const randomJumpEnableBtn = document.querySelector('#random-jump')
const changeJumpEnableBtn = document.querySelector('#change-jump')
const repeatElemBtn = document.querySelector('#repeat-elem')

const chooseJumpEnableBtn = document.querySelector('#choose-jump')
const uniqueEnableBtn = document.querySelector('#unique')

const menuBtn = document.querySelector(".elements__menu")

const selectAll = document.querySelector(".select-all")
const unselectAll = document.querySelector(".unselect-all")

const changeModeBtn = document.querySelectorAll('.change-mode')

const guideOpener = document.querySelector("#guide-opener")

let elems = JSON.parse(localStorage.getItem('elems')) || []
let saves = JSON.parse(localStorage.getItem('saves')) || []

const options = JSON.parse(localStorage.getItem('options')) || {
	count: 1,
	randomJumpEnable: false,
	changeJumpEnable: false,
	repeatEnable: false,
	chooseJumpEnable: false,
	uniqueEnable: false
}
const sortableOptions = {
	draggable: 'li:not(.jump)',
	delay: {
		mouse: 200,
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