// default import
import Controls from './controls.js'
import Timer from './timer.js'
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonAddTime,
  buttonReduceTime
} from './elements.js'
import {
  buttonForest,
  audioForest,
  buttonRain,
  audioRain,
  buttonCoffeeShop,
  audioCoffeeShop,
  buttonFireplace,
  audioFireplace
} from './sounds.js'

//Controls
const controls = Controls({
  buttonStop,
  buttonSet,
  buttonPause,
  buttonPlay
})

// Timer
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  minutes
})

//Events
buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
})

buttonAddTime.addEventListener('click', function () {
  controls.reset()
  timer.plus()
})

buttonReduceTime.addEventListener('click', function () {
  controls.reset()
  timer.minus()
})

buttonSet.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

// Sounds
buttonForest.addEventListener('click', function () {
  const imgForest = document.querySelector('.forest img')
  if (audioForest.paused) {
    audioForest.play()
    imgForest.src = './assets/img/forest-colored.svg'
  } else {
    audioForest.pause()
    imgForest.src = './assets/img/forest.svg'
  }
})

buttonRain.addEventListener('click', function () {
  const imgRain = document.querySelector('.rain img')
  if (audioRain.paused) {
    audioRain.play()
    imgRain.src = './assets/img/rain-colored.svg'
  } else {
    audioRain.pause()
    imgRain.src = './assets/img/rain.svg'
  }
})

buttonCoffeeShop.addEventListener('click', function () {
  const imgCoffeeShop = document.querySelector('.coffeeShop img')
  if (audioCoffeeShop.paused) {
    audioCoffeeShop.play()
    imgCoffeeShop.src = './assets/img/coffee-shop-colored.svg'
  } else {
    audioCoffeeShop.pause()
    imgCoffeeShop.src = './assets/img/coffee-shop.svg'
  }
})

buttonFireplace.addEventListener('click', function () {
  const imgFireplace = document.querySelector('.fireplace img')
  if (audioFireplace.paused) {
    audioFireplace.play()
    imgFireplace.src = './assets/img/fireplace-colored.svg'
  } else {
    audioFireplace.pause()
    imgFireplace.src = './assets/img/fireplace.svg'
  }
})
