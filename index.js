var recipes = {
}; 
var obj = { prop: 1 }
var newObj = deleteFromObjectByKey(obj, 'prop')

function updateObjectWithKeyAndValue(obj, key, value){ 
  return Object.assign({}, obj,{ [key]: value })
  }

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
    object[key] = value
    return object
}
function deleteFromObjectByKey(obj,key){
  delete newObj['prop']
}