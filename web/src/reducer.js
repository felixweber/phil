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
        newState = Object.assign({}, state, {fields: newFields, newFields: newFields})
      break;
    case 'CHANGE_FIELD':
        var fieldId = action.fieldId;
        var fieldContent = action.fieldContent;

        var field = newState.newFields.labels
            .find(field => field.id === fieldId);

        if(!field) {
            console.log('oh no');
            return;
        }

        field.content = fieldContent;

        // newState = Object.assign({}, state, {newFields: changedFields})
      break;     
  }
  return newState;
}

export default addImageData;