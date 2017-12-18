process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
    input_stdin += data;
})

process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split("\n");
    main();
})

function readLine() {
    return input_stdin_array[input_currentline++];
}

//////////////

function main() {
    let t = parseInt(readLine());
    for(let i = 0; i < t; i++){
      let s = readLine();
      console.log(isBalanced(s) ? "YES" : "NO");
    }
}

let openBrackets = ['{', '[', '(']
let closeBrackets = ['}', ']', ')']

function isPaired(o, j) {
    return o === '{' && j === '}' ||
        o === '[' && j === ']' ||
        o === '(' && j === ')'
}

function isBalanced(s) {
    let stackLeft = []
    let stackRight = []
    for (let i=0; i<s.length; i++) {
        if (openBrackets.indexOf(s[i]) > -1) {
            stackLeft.push(s[i])
        }             
    }
    for (let j=s.length-1; j>=0; j--) {
        if (closeBrackets.indexOf(s[j]) > -1) {
            stackRight.push(s[j])
        }
    }

    if (stackLeft.length === 0 || stackRight.length === 0 || stackLeft.length !== stackRight.length ) {
        return false
    }

    for (let i=0; i<stackLeft.length; i++) {
        if (!isPaired(stackLeft[i], stackRight[i])) {
            return false
        }
    }

    return true;
}

let s = "fda[(s}{lfa)]ds"
console.log(isBalanced(s) ? "YES" : "NO");

