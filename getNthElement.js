function getNthElement(arr, n){
    if (arr.length>0)
    return arr[n];
    else if (arr.length == 0)
    return undefined;
}
console.log(getNthElement([], 1))