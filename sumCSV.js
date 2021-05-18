function sumCSV(n){
    let data = n.split(','), sum =0;
    for(let i=0;i<data.length;i++){
        sum= sum+(+data[i]);
    }
    return sum;
}
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'))