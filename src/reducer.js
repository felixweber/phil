var initialState = {
    image: null, 
    fields: null,
    newFields: null
}


const addImageData = (state = initialState, action, image, fields) => {
  if(state === undefined) {
    return initialState;
  }
  var newState = state;

  switch(action.type) {
    case 'ADD_IMAGE':
        var newImage = action.image
        newState = Object.assign({}, state, {image: newImage});
      break;
    case 'ADD_FIELDS':
        var newFields = action.fields    
        newState = Object.assign({}, state, {fields: newFields})
      break;
    case 'CHANGE_FIELDS':
        var changedFields = action.fields    
        newState = Object.assign({}, state, {newFields: changedFields})
      break;      
  }
  return newState;
}

export default addImageData;