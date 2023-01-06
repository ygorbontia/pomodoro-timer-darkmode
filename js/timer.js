export default function Timer({
  displayMinutes,
  displaySeconds,
  resetControls
}) {
  let minutes = Number(displayMinutes.innerText)
  let timerCountdown

  function countdown() {
    timerCountdown = setInterval(() => {
      let minutes = Number(displayMinutes.innerText)
      let seconds = Number(displaySeconds.innerText)
  
      if (minutes <= 0 && seconds <= 0) {
        resetDisplay()
        resetControls()
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        minutes--
      }
  
      seconds--
      updateDisplay(minutes, seconds)
    }, 1000)
  }
  
  function updateDisplay(minutes, seconds) {
    displayMinutes.innerText = String(minutes).padStart(2, '0')
    displaySeconds.innerText = String(seconds).padStart(2, '0')
  }
  
  function updateMinutesDisplay(newMinutes) {
    displayMinutes.innerText = String(newMinutes).padStart(2, '0')
  }

  function updateTotalMinutes(operator) {
    if (operator == 'sum') {
      minutes = minutes + 5
    } else if (operator == 'subtraction') {
      minutes = minutes - 5
    }
  }
  
  function resetDisplay() {
    clearInterval(timerCountdown)
    updateDisplay(minutes, 0)
  }

  function pauseDisplay() {
    clearInterval(timerCountdown)
  }

  return {
    countdown,
    updateDisplay,
    updateMinutesDisplay,
    updateTotalMinutes,
    resetDisplay,
    pauseDisplay
  }
}