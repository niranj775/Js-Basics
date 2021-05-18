
var obj ={
    name: "enk"
}
function removeProperty(obj, key){
    delete obj.key;
}
console.log(removeProperty(obj, 'name'));