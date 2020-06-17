let player = 1;
let grid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
function selectColumn(row, col) {
    if(grid[row][col] === 1 || grid[row][col] === 2) return;
    
    if(player == 1) {
        grid[row][col] = 1;
        player = 2;
        document.getElementById("colorTurn").innerHTML = "Red Turn";
    } else {
        grid[row][col] = 2;
        player = 1;
        document.getElementById("colorTurn").innerHTML = "Black Turn";
    }
    refreshGrid();
}
function refreshGrid() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            if (grid[row][col] == 0) {
                document.getElementById("cell" + row + col).style.backgroundColor = "white";
            } else if (grid[row][col] == 1) {
                document.getElementById("cell" + row + col).style.backgroundColor = "black";
            } else if (grid[row][col] == 2) {
                document.getElementById("cell" + row + col).style.backgroundColor = "red";
            }
        }
    }
}