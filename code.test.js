const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var test1 = [
    [0,1,0],
    [1,1,1],
    [0,0,1]
];

// This is a regular case in which there are no possible hiccups in the graph that could trip up the program
assert(JSON.stringify(depthFirstSearch(test1, 0, 1)) != JSON.stringify([]));

// This is a case in which the graph could cause issues in the program because the graph does not connect from
// the start node to the target. In this case it should return []
assert(JSON.stringify(depthFirstSearch(test1, 2, 0)) == JSON.stringify([]));

// This is a case in which the graph could cause issues in the program because the graph has a cycle before it
// reaches the target node. This could be an issue causing the program to loop if it does not work properly.
// If it does work properly then it would pass the test. It also has a cycle from node 1 back to itself, which
// could trip up the program if the program does not work.
assert(JSON.stringify(depthFirstSearch(test1, 0, 2)) != JSON.stringify([]));
