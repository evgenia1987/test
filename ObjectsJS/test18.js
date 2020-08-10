'use strict'
function sumInput(){
    let arr = [];
    let inputNum, accumArr=0;
    while(1){
        inputNum = prompt('Введите число:',0);
        if (!(isFinite(inputNum))||(inputNum==='')||(inputNum===null))
            break;
        arr.push(+inputNum);
    }
    for (let i=0; i<arr.length;i++){
        accumArr +=arr[i];
    }
    return accumArr;
}

alert(sumInput());

