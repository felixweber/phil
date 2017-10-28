var initialState = {
    image: null, 
    fields: null
}


const addImageData = (state = initialState, action, image) => {
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
  }
  return newState;
}

export default addImageData;