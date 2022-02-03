window.onload = () => {
    displayNumbers()
}

const displayNumbers = () => {

    let container = document.getElementById('container')

    for(let i=1; i<=76; i++) {
        let numberNode = document.createElement('div')
        numberNode.classList.add('number')
        numberNode.innerText = i
        container.appendChild(numberNode)
    }

    let lastDiv = document.createElement('div')
    lastDiv.classList.add('lastDiv')
    lastDiv.innerText = 'BINGO'
    container.appendChild(lastDiv)
}