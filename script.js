let gridSize = 16;

const grid = document.querySelector('.grid');
for (let i = 0; i < gridSize * gridSize; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.style.width = gridItem.style.height =(100 / gridSize) + "%";
    grid.appendChild(gridItem);
}

let mouseDown = 0;

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

document.body.onmouseup = () => {
    mouseDown = 0;
}

function changeBackgroundColor(e) {
    if (mouseDown) {
        e.target.style.backgroundColor = 'black';
    }
}


document.querySelector('.gridSize').addEventListener('click', function() {
    let newGridSize = prompt("Please enter a grid size between 1 and 100 ");
    newGridSize = parseInt(newGridSize);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        newGridSize = gridSize;
    } else {
        gridSize = newGridSize;

        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }

        for (let i = 0; i < gridSize * gridSize; i++) {
            let gridItem = document.createElement('div');
            gridItem.classList.add('gridItem');
            gridItem.style.width = gridItem.style.height = (100 / gridSize) + "%";
            grid.appendChild(gridItem);
        }

        gridItem = document.querySelectorAll('.gridItem');

        gridItem.forEach(function(gridItem){
            gridItem.addEventListener('mouseover', function(e) {
                if (mouseDown) {
                e.target.style.backgroundColor = 'black';
                }
            });
        });
    }
});