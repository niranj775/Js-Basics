function getDistance(x1,x2,y1,y2){
    let  x = x2 - x1, y = y2 -y1;
    let xpow2 = Math.pow(x,2);
    let ypow2 = Math.pow(y,2);
    let d=Math.sqrt(xpow2+ypow2) 
    console.log(d);
}

getDistance(3,7,4,7)