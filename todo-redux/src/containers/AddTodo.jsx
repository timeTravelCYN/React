import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index';

let AddTodo = ({dispatch}) => {
  let input;

  return (
    <div>
      <form 
        onSubmit={e => {
          e.preventDefault();
          dispatch(addTodo(input.value))
          input.value=""
        }}
      >
        <input type="text" ref={node => input = node}/>
        <button type="submit">新增</button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo