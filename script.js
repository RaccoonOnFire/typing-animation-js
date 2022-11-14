const input = document.querySelector("input")
const div = document.querySelector(".result")
const animateBtn = document.querySelector(".animateBtn")
const span = document.querySelector("span")
const animationSpeed = 80
let i = 0

const clear = () => {
  div.textContent = ""
  i = 0
}
const spanAnimation = () => {
  span.classList.toggle("hidden")
}
const textAnimation = () => {
  if (input.value == "") {
    div.textContent = ""
  }

  if (i < input.value.length) {
    console.log(input.value[i])
    div.textContent += input.value[i]
    i++
    setTimeout(textAnimation, animationSpeed)
  }
}

setInterval(spanAnimation, 450)

animateBtn.addEventListener("click", clear)
animateBtn.addEventListener("click", textAnimation)
