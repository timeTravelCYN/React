import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisiblityTodoList from '../containers/VisiblityTodoLIst'
import Footer from './Footer'
const App = () => (
  <div>
    <AddTodo />
    <VisiblityTodoList />
    <Footer />
  </div>
)

export default App