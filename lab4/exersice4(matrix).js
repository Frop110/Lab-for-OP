'use strict'

function max(arg) {
    let max1 = arg[0][0]
    
    for(let i = 0; i < arg.length; i++){
        for(let j = 0; j < arg[i].length; j++){
            if(arg[i][j] > max1){
                max1 = arg[i][j];
            }
        }
    }
    return max1;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

console.log(m); // 9