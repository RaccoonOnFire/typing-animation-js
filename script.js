const input = document.querySelector("input")
const div = document.querySelector(".result")
const animateBtn = document.querySelector(".animateBtn")
const animationSpeed = 80
let i = 0

const clear = () => {
  div.textContent = ""
  i = 0
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


animateBtn.addEventListener("click", clear)
animateBtn.addEventListener("click", textAnimation)
