var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1],  count =0, sum=0;

 let arr2 = function countPositivesSumNegatives(arr){
   for(i=0;i<arr.length;i++){
        if(arr[i]>0)
        count++;
   }
   for(i=0;i<arr.length;i++){
    if(arr[i]<0)
    sum = sum + arr[i];
}
return console.log(count,sum);
}

console.log(arr2);
