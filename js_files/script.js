const container = document.querySelector("#container");
const gridSize = 16;
for (let i = 0; i < (gridSize * gridSize); i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grids");
    container.appendChild(gridItem);
};