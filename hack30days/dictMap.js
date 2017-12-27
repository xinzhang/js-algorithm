
function main() {
    input = input.split('\n');
    let book = new Map();
    let n = + input[0];
    for (let entry of input.slice(1, n + 1)) {
        entry = entry.split(' ');
        book.set(entry[0], entry[1]);
    }
    for (let key of input.slice(n + 1)) {
        let value = book.get(key);
        process.stdout.write(value ? `${key}=${value}\n` : `Not found\n`);
    }
}


function factorial(n) {
    return n > 1 ? n * factorial(n-1) : 1;
}

