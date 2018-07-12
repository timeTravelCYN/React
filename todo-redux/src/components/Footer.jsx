import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div>
    筛选：
    {" "}
    <FilterLink filter="SHOW_ALL">
      全部
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      未完成
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      已完成
    </FilterLink>
    {", "}
  </div>
)

export default Footer