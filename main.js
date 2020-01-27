const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate() {
  const now = new Date() //new Date is a current time
  const seconds = now.getSeconds() // getting secods of current minute
  const secondsDegrees = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  // console.log(seconds);

  const minutes = now.getMinutes()
  const minDegrees = (minutes / 60) * 360 + 90
  minHand.style.transform = `rotate(${minDegrees}deg)`
  // console.log(minutes);

  const hours = now.getHours()
  const hourDegrees = (hours / 12) * 360 + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  // console.log(hours);
}

setInterval(setDate, 1000)
