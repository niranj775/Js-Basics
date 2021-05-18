function  getLastElement(arr) {
    if (arr.length > 0)
    return arr[arr.length-1];
    else if (arr.length == 0)
    return -1;
}

console.log(getLastElement([]))