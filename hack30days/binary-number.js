// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

/////////////// ignore above this line ////////////////////
console.log(getMaxNumber(5000))

function main() {
    var n = parseInt(console.readLine());
    console.log(n)
    var result = getMaxNumber(n)
    console.log(result)
}

function getMaxNumber(n) {
    let strings = []

    while (n > 0) {
        let binaryOutput = n % 2
        n = Math.trunc( n / 2)
        strings.unshift(binaryOutput)
    }

    console.log(strings)
    return strings;
}

function findContinueOne(strings) {
    let max = 0;
    let counter = 0;
    strings.forEach( x => {
        if (x == 1) {
            counter ++
            if (counter > max) {
                max = counter
            }            
        } else {
            counter = 0
        }        
    })

    return max
}

console.log(findContinueOne(getMaxNumber(5)))
console.log(findContinueOne(getMaxNumber(13)))
console.log(findContinueOne(getMaxNumber(999)))
console.log(findContinueOne(getMaxNumber(16)))
