var recipes = {
}; 
var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value){ 
  return Object.assign({}, recipes,{ [key]: value })
  }
  
  
  //Object.assign({},{key: 'value'})
  //return recipes 