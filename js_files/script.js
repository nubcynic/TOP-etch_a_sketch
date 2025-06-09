const container = document.querySelector("#container");
const gridSize = 16;
// Create square grids based on grid size
for (let i = 0; i < (gridSize * gridSize); i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grids");
    container.appendChild(gridItem);
};
// Reference to the above created grids as nodelist
const grids = document.querySelectorAll(".grids");

// Upon mouseover, each grid changes its bg color
grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "blue";
    });
});
