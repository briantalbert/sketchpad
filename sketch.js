colorWheel = ['white','red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
makeBoard()

resizeButton = document.querySelector('.change-sides')
resizeButton.addEventListener('click', getSides => {
    clearBoard()
    console.log('board cleared')
    let num = getNumBlocks()
    makeBoard(num)
})

function makeBoard(numBlocks = 4) {
    createGrid(numBlocks)
    addHoverListener()
}

function createGrid(numBlocks = 4) {
    let board = document.querySelector('.board')
    let sideLength = (480/numBlocks)

    for (let j = 1; j <= numBlocks; j++){
        let row = document.createElement('div')
        row.classList.add('row')

        for (let i = 1; i <= numBlocks; i++){
            let div = document.createElement('div')
            styleBox(div, row, sideLength)
        }

    board.appendChild(row)
    }

}

function styleBox(div, row, sideLength) {
    console.log('stylebox')
    console.log(div)
    console.log(row)
    div.classList.add('sketchbox')
    div.setAttribute('id', 0)
    div.setAttribute('style', `width:${sideLength+'px'}; height:${sideLength+'px'}; `)
    row.appendChild(div)
}

function getNumBlocks() {
    let numBlocks = +prompt("Enter number of blocks per side (1-100):");

    if (Number.isInteger(numBlocks) && numBlocks >= 1 && numBlocks <= 100) {
        return numBlocks;
    }
    else {
        return getNumBlocks();
    }

}

function addHoverListener() {
    let boxes = document.querySelectorAll('.sketchbox')
    boxes.forEach(box => box.addEventListener('mouseover', changeBackground => {
        box.id = (+box.id + 1) % colorWheel.length
        box.style.backgroundColor = (colorWheel[box.id])
    }))
}

function clearBoard() {
    let rows = document.querySelectorAll('.row')
    let board = document.querySelector('.board')
    for (let i = 0; i < rows.length; i++) {
        board.removeChild(rows[i])
    }
}