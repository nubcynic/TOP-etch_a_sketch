const container = document.querySelector("#container"); // Reference to container div

const gridBtn = document.createElement("button");       // create button element
gridBtn.textContent = "Choose Grid Size";                    // add text
gridBtn.classList.add("btn");                           // add class
container.parentNode.insertBefore(gridBtn, container);  // insert gridBtn before container

let currentGridSize = 16;    // default or initial grid size

changeGrid(currentGridSize);    // call the function that changes the grid size

// Check validity of the grid size
function isValidGridSize(size) {
    return !isNaN(size) && size >=12 && size <= 64; // returns true if the condition meet

};

// function that runs when btn is clicked

gridBtn.addEventListener("click", () => {
    gridBtn.classList.toggle("btnClick");    // when clicked, run .btnClick CSS rule
    const newGridSize = Number(prompt(`Enter your preferred grid between 12 and 64 :`));    // popup
    if (isValidGridSize(newGridSize)) {     // if condition that runs function
        currentGridSize = newGridSize;     // placeholder for grid size
        container.innerHTML = "";    // this clears previous grid str.
        changeGrid(currentGridSize);    // function call that changes grid str.

    } else {
        alert("Invalid input. Enter between 12 and 64");    // runs if prompt is incorrect
    };
});

// function that changes the grid size
function changeGrid(gridSize) {
    const totalCells = gridSize * gridSize; // total number of small sq. that form the grid str.
    const cellSize =  Math.floor(500/gridSize);    // size of each small squares
    // start from zero and run till "i" is greater than "totalCells". Also increment "i" each time
    for (let i = 0; i < totalCells; i++) {    
        const cell = document.createElement("div");   // create div element
        cell.classList.add("grids");    // give them class = grids
        cell.style.width = `${cellSize}px`;    // give width for "grids", uses inline styling
        cell.style.height = `${cellSize}px`;    // give height for "grids", uses inline styling
        cell.addEventListener("mouseover", (e) => {  // listen everytime mouse hovers over grids
            e.target.style.backgroundColor = getRandomColor();    // set random bg color via fn
        });
        container.appendChild(cell);    // add div sq boxes inside "container" that makes grid str.
    };
};

// function to generate random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";    // variable with string, hex-code (0-9) (A-F) eg: #65G8H4
    let color ="#";    // initial value for hex color code start with "#" symbol
    for (let i = 0; i < 6; i++) {    // for loop that iterate 6 times; hex-code has 6 letters/num
        // Math.random gives value from 0-0.9, multiplied by 16 as the hex-code has 16 strings total, Math.floor rounds up decimal to whole num; the final number shows the index from letters. This runs 6 times to choose random 6 letters that form a random color
        color += letters[Math.floor(Math.random() *16)];    
    };
    return color;    // returns random color generated above
};


