import { connect } from 'react-redux'
import TodoList from '../components/TodoLIst'
import { toggleTodo } from '../actions'

const getVisiblityFilter = (todos, filter) => {
  console.log(todos, filter)
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(t => t.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisiblityFilter(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisiblityTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisiblityTodoList