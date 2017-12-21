process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

}

function processArray() {
    input = input.split('\n').map(line => line.split(' ').map(Number))
    let answer = -1
    for (let i=0;i<input.length-2; i++) {
        for (let j=0; j< input.length-2; j++) {
            let sum = input[i+0][j+0] + input[i+0][j+1] + input[i+0][j+2]
                        +           input[i+1][j+1]
                        + input[i+2][j+0] + input[i+2][j+1] + input[i+2][j+2];
            answer = Math.max(answer, sum);
        }
    }
}




