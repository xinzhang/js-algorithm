
const output = require('d3node-output');
const d3 = require('d3-node')().d3;
const d3nLine = require('d3node-linechart');

const data = [
    {key: 0, value: 1},
    {key: 4, value: 2},
    {key: 5, value: 4},
    {key: 8, value: 10},
    {key: 12, value: 17},
    {key: 16, value: 26},
    {key: 20, value: 30},
    {key: 25, value: 30}, 
    {key: 30, value: 30}
]


// create output files
output('./output', d3nLine({ data: data }));