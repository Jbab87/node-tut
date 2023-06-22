

//local dependency - use it only in this particular project
// npm i/install <packageName>

//global dependency - use it in any project
// npm i/install -g <packageName>


//package.json - manifest file (stores important info about project/package)
// ways to create package.json
//1. manual approach (create package.json in the root, create each property)
// 2. run npm init (step by step answer questions, press enter to skip )
// 3. npm init -y (everything is default)


const _ = require('lodash');

const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)