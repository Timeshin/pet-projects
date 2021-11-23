const btn = document.querySelector(".btn")

btn.addEventListener("click", (e) => {
    const positionClickX = e.clientX
    const positionClickY = e.clientY
    const buttonPositionY = e.target.offsetTop
    const buttonPositionX = e.target.offsetLeft
    const insidePositionX = positionClickX - buttonPositionX
    const insidePositionY = positionClickY - buttonPositionY
    
    const span = document.createElement("span")
    span.classList.add("wave")
    
    span.style.left = `${insidePositionX}px`
    span.style.top = `${insidePositionY}px`

    e.target.append(span)

    setTimeout(() => {
        span.remove()
    }, 400)
})