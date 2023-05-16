let gridSize = 16;

const grid = document.querySelector('.grid');
for (let i = 0; i < gridSize * gridSize; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.style.width = gridItem.style.height =(100 / gridSize) + "%";
    grid.appendChild(gridItem);
}

let mouseDown = 0;
document.body.onmousedown = () => {
    mouseDown = 1;
}
document.body.onmouseup = () => {
    mouseDown = 0;
}

gridItem = document.querySelectorAll('.gridItem');

gridItem.forEach(function(gridItem){
    gridItem.addEventListener('mouseover', function(e) {
        if (mouseDown) {
            e.target.style.backgroundColor = 'black';
        }
    });
});

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