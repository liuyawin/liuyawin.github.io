let matrixTool = require('./tools')

let array = matrixTool.makeMatrix(0)
console.log(array);

let arr = [0,1,2,3,4,5,6,7,8];
matrixTool.shuffle(arr);
console.log(arr);
