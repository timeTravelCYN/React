let todoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  id: todoId++
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisiblityFilter = filter => ({
  type: 'SET_VISIBLITY_FILTER',
  filter
})