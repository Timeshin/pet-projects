const input = document.querySelector("input")
const textField = document.querySelector(".text")

const text = "Some text..."
let speed = 300 / input.value
let idx = 1

const writeText = () => {
    console.log(speed)
    idx++

    if(idx > text.length) {
        idx = 1
    }

    textField.innerHTML = text.slice(0, idx)

    const writeLetter = setTimeout(writeText, speed)

    if(speed === Infinity || Math.sign(speed) === -1) {
        clearTimeout(writeLetter)
    }
}

input.addEventListener("input", (e) => {
    speed = 300 / e.target.value
    writeText()
})

writeText()