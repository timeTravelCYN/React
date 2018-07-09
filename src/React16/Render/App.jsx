import React, {Component} from 'react'
import ListComponent from './ListComponent';
import StringComponent from './StringComponent';

export default class App extends Component {
  render () {
    return [
      <ul key="aa">
        <ListComponent key="bb"/>
      </ul>,
      <StringComponent key="cc"/>
    ]
  }
}