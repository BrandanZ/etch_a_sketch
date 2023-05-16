const grid = document.querySelector('.grid');

for (let i=0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add('gridItem');
    grid.appendChild(cell);
}