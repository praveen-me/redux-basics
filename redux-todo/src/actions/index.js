export function addTodo(text) {
  return {
    type : "ADD_TODO",
    text
  }
}

export function deleteTodo(id) {
  return {
    type : "DELETE_TODO",
    id
  }
}