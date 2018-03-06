var recipes = {
}; 
var obj = { prop: 1 }

function updateObjectWithKeyAndValue(obj, key, value){ 
  return Object.assign({}, obj,{ [key]: value })
  }
  
  
  //Object.assign({},{key: 'value'})
  //return recipes 