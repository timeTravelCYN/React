import React, { Component } from 'react'

class ListComponent extends Component {
  render () {
    return [
      <li key="a">First item</li>,
      <li key="b">Second Item</li>,
      <li key="c">Third Item</li>,
    ];
  }
}
export default ListComponent