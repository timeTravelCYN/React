# Redux TodoList demo

`react + react-redux + redux` todolist 

 ## redux 简析

 ### store

 其实就是 state

 ### action

 定义事件的要素， `type && data`

 ### dispatch

 根据 action 的要素，改变state，通过返回新的对象

 ## react-redux

 ### Provider

 其实就是把 state 提升到根组件，方便分发到子组件，无论层级。

 ### connect

 #### mapStateToProps
 其实就是从 store 中分拣出组件需要的state，通过props 传递给组件
 #### mapDispatchToProps
 定义方法，触发dispatch，修改store，已更新数据，刷新视图