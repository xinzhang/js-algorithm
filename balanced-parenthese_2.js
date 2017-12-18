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
    let stack = []
    
    for (let i=0; i<s.length; i++) {
        if (openBrackets.indexOf(s[i]) > -1) {
            stack.push(s[i])
        }     
        if (closeBrackets.indexOf(s[i]) > -1) {
            if (stack.length == 0)
                return false
            
            let o = stack.pop()
            let p = s[i]
            if (!isPaired(o, p)) {
                return false
            }

        }        
    }

    return stack.length === 0;
}

let s = "fda[(s}{lfa)]ds"
console.log(isBalanced(s) ? "YES" : "NO");

s = "fda[(s{l}fa)]ds"
console.log(isBalanced(s) ? "YES" : "NO");
