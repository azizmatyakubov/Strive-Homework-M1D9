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

const getRandomNumber = () => {
    let randomNums = []
    for(let i=0; i<24; i++) {
        let randomNum = Math.floor(Math.random() * 77) 
        randomNums.push(randomNum)
        let randomNumberNode = document.createElement('div')
        randomNumberNode.classList.add('randomNumber')
        randomNumberNode.innerText = randomNums[i]
        document.getElementById('randomNumber').appendChild(randomNumberNode)
    }

    console.log(randomNums)
}

getRandomNumber()