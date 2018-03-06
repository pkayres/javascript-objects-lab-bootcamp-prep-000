var recipes = {
}; 

function updateObjectWithKeyAndValue(object, key, value){ 
  return Object.assign({}, recipes,{ [key]: value }, {[key]: value, [key]: value})
  }
  
  
  //Object.assign({},{key: 'value'})
  //return recipes 