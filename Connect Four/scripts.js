document.addEventListener('DOMContentLoaded', function () {
    let player = 1;
    let grid = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    function selectColumn(col){
        if(player == 1) {
            grid[5][col] = 1;
            player = 2;
            document.getElementById(colorTurn).innerHTML=""
        } else {
            grid[5][col] = 2;
            player = 1;
        }
        refreshGrid();
    }
    function refreshGrid() {
        for(let row = 0; row < 6; row++) {
            for(let col = 0; col < 7; col++) {
                if(grid[row][col] == 0) {
                    document.getElementById("cell"+row+col).style.backgroundColor="#FFFFFF";
                } else if(grid[row][col] == 1) {
                    document.getElementById("cell"+row+col).style.backgroundColor="#FFFF00";
                }
            }
        }
    }
});