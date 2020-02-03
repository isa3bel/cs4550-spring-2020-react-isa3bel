import React, {Component} from 'react'
import ModuleListItem from './ModuleListItemComponent';

class ModuleList extends React.Component {

  render() {
    return(
      <div>
        <ul class="list-group wbdv-module-list">
          <ModuleListItem/>
          <ModuleListItem/>
          <ModuleListItem/>
        </ul>
      </div>
    )
  }


  
}

export default ModuleList;