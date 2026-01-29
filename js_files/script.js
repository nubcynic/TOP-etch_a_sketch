const container = document.querySelector("#container"); // Reference to container div

const gridBtn = document.createElement("button");       // create button element
gridBtn.textContent = "Choose Grid Size";                    // add text
gridBtn.classList.add("btn");                           // add class
container.parentNode.insertBefore(gridBtn, container);  // insert gridBtn before container

gridBtn.addEventListener("click", () => {
    gridBtn.classList.toggle("btnClick");
    const gridSize = Number(prompt(`Enter your preferred grid between 8 and 100 :`));
    if (isNaN(gridSize) || gridSize < 8 || gridSize > 100 ) {
        alert("Invalid input. Enter between 8 and 100");
    } else {
        // changeHeightWidth(gridSize);
        changeGrid(gridSize);
    };
});

// function changeHeightWidth(gridSize=16) {
//     for (let i = 0; i < styleSheet.cssRules.length; i++) {
//         if (styleSheet.cssRules[i].selectorText === ".grids") {
//             let newHeight = `${min(74/gridSize + "vw", 74/gridSize + "vh")}`;
//             let newWidth =  `${min(74/gridSize + "vw", 74/gridSize + "vh")}`;
//             styleSheet.cssRules[i].style.height = newHeight;
//             styleSheet.cssRules[i].style.width = newWidth;
//         };
//     }
// }

function changeGrid(gridSize=16) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    };
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grids");
        container.appendChild(gridItem);
    };
};


// const gridSize = 16;
// // Create square grids based on grid size
// for (let i = 0; i < (gridSize * gridSize); i++) {
//     const gridItem = document.createElement("div");
//     gridItem.classList.add("grids");
//     container.appendChild(gridItem);
// };

// Reference to the above created grids as nodelist
const grids = document.querySelectorAll(".grids");

// Upon mouse hover, each grid changes its bg color
grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "blue";
    });
});

