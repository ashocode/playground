function solve (args){
    var arr = args[1].split(' ').map(Number);
    var k = Number(args[0].split(' ')[1]);
    var length = arr.length;
    for (j = 0; j < k; j +=1){
        var newArr = [];
        for (i = 0; i <= length - 1; i+=1){
            if (i === 0){
                var lower = arr[length - 1];
                var higher = arr[i + 1];
                operations(lower,higher);      
            } else if (i === (length - 1)){
                var lower = arr[i - 1];
                var higher = arr[0];
                operations(lower,higher);
            } else {
                var lower = arr[i - 1];
                var higher = arr[i + 1];
                operations(lower,higher);
            }
            function operations(lower,higher){
                if (arr[i] === 0){
                    newArr[i] = Math.abs(lower - higher);
                } else if(arr[i] === 1){
                    newArr[i] = lower + higher;
                } else if (arr[i] % 2 === 0){
                    newArr[i] = Math.max(lower, higher);
                } else if (arr[i] % 2 !== 0){
                    newArr[i] = Math.min(lower, higher);
                } 
            } 
        }
        arr = newArr;
    }
    //console.log(newArr);
    var sumOfAll = newArr.reduce((a,b) => a + b, 0);
    console.log(sumOfAll);
}
var args = ([
    '5 1',
    '9 0 2 4 1']);   
solve(args);
