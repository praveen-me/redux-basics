let initialState = {
  todoArray : []
}

const reducer = function(state = initialState, action) {
  switch(action.type) {
    case "ADD_TODO" : {
      const id = state.todoArray.length;
      return {
        todoArray : [...state.todoArray, {
          text : action.text,
          id
        }]
      }
    }
    case "DELETE_TODO" : {
      const filterArray = state.todoArray.filter(item => item.id !== action.id);
      return {
        todoArray : filterArray
      }
    }
    default : return state;
  }
}

export default reducer;

