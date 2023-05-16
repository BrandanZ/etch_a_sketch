const grid = document.querySelector('.grid');

for (let i=0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add('gridItem');
    grid.appendChild(cell);
}

let mouseDown = 0;
document.body.onmousedown = () => {
    mouseDown = 1;
}
document.body.onmouseup = () => {
    mouseDown = 0;
}

const gridItem = document.querySelectorAll('.gridItem');

gridItem.forEach(function(gridItem){
    gridItem.addEventListener('mouseover', function(e) {
        if (mouseDown) {
            e.target.style.backgroundColor = 'red';
        }
    });
});