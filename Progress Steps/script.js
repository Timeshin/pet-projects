const progressBar = document.querySelector(".progress-bar")
const steps = document.querySelectorAll(".step")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

let ourStep = 1

const setActiveElements = () => {
    steps.forEach((item, id) => {
        if(id <= ourStep - 1) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    })
}

const updateButtons = () => {
    if(ourStep === steps.length) {
        nextBtn.disabled = true
    } else if (ourStep === 1) {
        prevBtn.disabled = true
    } else {
        nextBtn.disabled = false
        prevBtn.disabled = false
    }
}

nextBtn.addEventListener("click", () => {
    const activeElements = document.querySelectorAll(".active")

    ourStep++

    progressBar.style.width = activeElements.length / (steps.length - 1) * 100 + "%"

    updateButtons()
    setActiveElements()
})

prevBtn.addEventListener("click", () => {
    const activeElements = document.querySelectorAll(".active")

    ourStep--

    progressBar.style.width = (activeElements.length - 2) / (steps.length - 1) * 100 + "%"

    updateButtons()
    setActiveElements()
})

updateButtons()
setActiveElements()