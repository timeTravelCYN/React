const visiblityFilter = (state="SHOW_ALL", action) => {
  switch (action.type) {
    case 'SET_VISIBLITY_FILTER':
      return action.filter
    default:
      return state
  }
}
export default visiblityFilter