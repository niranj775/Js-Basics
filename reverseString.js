function reverseString(str){
    let arr = str.split('');
    let rev = arr.reverse('')
    let revStr = rev.join('')
    console.log(revStr);     
}

reverseString("JavaScript")
