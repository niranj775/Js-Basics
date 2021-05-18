let arr=[];
function powersOfTwo(n){
    for(let i =0;i<n+1;i++ ){
        arr.push(Math.pow(2,i));
    }
    return arr;
}

console.log(powersOfTwo(5).join(','));

