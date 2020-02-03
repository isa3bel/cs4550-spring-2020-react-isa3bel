import React from 'react'

const ModuleListItem = ({module, selectModule}) =>
  <li
  class="list-group-item wbdv-module-item wbdv-selected wbdv-module-item-title d-flex justify-content-between">
  Module 1 - jQuery
  <button type="button"
      class="btn btn-danger wbdv-module-item-delete-btn">X</button>
  </li>
export default ModuleListItem;