var numArray = [ 5, 7, 12, 8, 3, 2, 6, 2]

function PrintCombination(numArray, counter) {
    var resultsArray = []
    for (var i=0; i<numArray.length; i++) {
        let value = numArray[i]
        
        if (counter == 1) {
            resultsArray.push( String(value) )
        }
        else {
            let reminderArray = numArray.slice(i+1)

            let previousValuesArray = PrintCombination(reminderArray, counter - 1)
            previousValuesArray.map( x=> value + ", " + x).forEach( x=> resultsArray.push(x))       
        }
    }
    return resultsArray
}

function total(x) {
    let total = x.split(',').reduce( (result, val) => { return result + parseInt(val.trim()) } , 0);
    return total;
}

function SolveSumset(numArray, counter, destination) {
    var results = PrintCombination(numArray, counter)
    var solved = results.filter(x => total(x) == destination)
    if (solved.length == 0) {
        console.log("no answer")
    } else {
        solved.forEach( x=> console.log(x))
    }
}

for (var i=0; i<numArray.length; i++) {
    var result = SolveSumset(numArray, i, 10)
}

