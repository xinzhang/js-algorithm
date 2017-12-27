
let matrix = []

function solve(matrix) {
    for (let y=0; y< matrix.length; y++) {
        for (let x=0; x<matrix[y].length; x++) {
            update_region(matrix, x, y)
        }
    }
    
    console.log(matrix);

    let max = 0;

    for (let y=0; y< matrix.length; y++) {
        for (let x=0; x<matrix[y].length; x++) {
            if (matrix[y][x] > max) {
                max = matrix[y][x]
            }
        }
    }

    return max;
}

function update_region(matrix, x, y) {
    if (matrix[y][x] == 0) return;
    
    let max = 0;

    for (let i=y-1;i<=y+1;i++) {
        for (let j=x-1;j<=x+1;j++) {
            if (! (i===y && j===x)) {
                let c = get_cell(matrix, j, i);
                if (c > max) max = c;
            }
        }
    }

    matrix[y][x] = max + 1;
}

function get_cell(matrix, x , y) {
    if (x<0 || y< 0) return 0
    if (y >= matrix.length || x>matrix[y].length) return 0;
    return 1;
}

matrix=[[1,1,0,0],[0,1,1,0], [0,0,1,0], [1,0,0,0]]
let connected_result = solve(matrix)
console.log(connected_result)

