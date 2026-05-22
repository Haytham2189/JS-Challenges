const time = document.getElementById("time")

const startBtn = document.getElementById("startBtn")

const pauseBtn = document.getElementById("pauseBtn")

const resetBtn = document.getElementById("resetBtn")

let seconds = 0

let interval = null

function updateTime() {

  let minutes = Math.floor(seconds / 60)

  let secs = seconds % 60

  if (minutes < 10) {
    minutes = "0" + minutes
  }

  if (secs < 10) {
    secs = "0" + secs
  }

  time.textContent = minutes + ":" + secs

}

startBtn.addEventListener("click", function () {

  if (interval === null) {

    interval = setInterval(function () {

      seconds++

      updateTime()

    }, 1000)

  }

})

pauseBtn.addEventListener("click", function () {

  clearInterval(interval)

  interval = null

})

resetBtn.addEventListener("click", function () {

  clearInterval(interval)

  interval = null

  seconds = 0

  updateTime()

})