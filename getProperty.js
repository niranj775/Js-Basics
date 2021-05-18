function getProperty(obj){
    
    if ('mykey' in obj)
    return obj["mykey"];
}

console.log(getProperty(obj, 'mykey'))
var obj = {
    mykey: 'value'
    };