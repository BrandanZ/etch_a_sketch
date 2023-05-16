let gridSize = 16;
let mouseDown = 0;
const grid = document.querySelector('.grid');

function createGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < gridSize * gridSize; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.style.width = gridItem.style.height =(100 / gridSize) + "%";
        grid.appendChild(gridItem);
    }
}

function addEventListenersToGridItems() {
    let gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach(function(gridItem) {
        gridItem.addEventListener('mousedown', function(e) {
            mouseDown = 1;
            changeBackgroundColor(e);
        });
        gridItem.addEventListener('mouseover', function(e) {
            if (mouseDown) {
                changeBackgroundColor(e);
            }
        });
        gridItem.addEventListener('mouseup', function(e) {
            mouseDown = 0;
        });
    });
}

function changeBackgroundColor(e) {
    if (mouseDown) {
        e.target.style.backgroundColor = 'black';
    }
}

document.body.onmouseup = () => {
    mouseDown = 0;
}

createGrid(gridSize);
addEventListenersToGridItems();

document.querySelector('.gridSize').addEventListener('click', function() {
    let newGridSize = prompt("Please enter a grid size between 1 and 100 ");
    newGridSize = parseInt(newGridSize);

    if (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
        // If new grid size is invalid, do nothing to keep grid the same size
    } else {
        gridSize = newGridSize;
        createGrid(gridSize);
        addEventListenersToGridItems();
    }
});