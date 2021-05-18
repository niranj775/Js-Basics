var obj = {};
function addProperty(obj, key){
    if(!obj[key])
    obj[key] = true;
    return obj;
}

console.log(addProperty(obj, "mykey"));