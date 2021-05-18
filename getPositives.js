let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1], posArr=[];
function getPositives(){
    arr.forEach((arr)=>{
        if(arr>0) posArr.push(arr);
    })
    return (posArr);
}

console.log(...getPositives(arr))