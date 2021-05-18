function areBothOdd(n1,n2){
    let case1 = n1 % 2, case2 = n2 %2;
    if(case1 == true && case2 == true)
    return console.log("true")
    else return console.log("false")  
}
areBothOdd(1, 3);
areBothOdd(1, 4);
areBothOdd(2, 3);
areBothOdd(0, 0);