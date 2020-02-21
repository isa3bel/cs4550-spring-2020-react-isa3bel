const widgets = [
    {id: "123", title: "W1"},
    {id: "456", title: "W2"},
    {id: "789", title: "W3"},
    
  ]


const widgetRuducer = (state = {widgets: widgets}, action) => {
  switch(action.type) {
      // TODO: move all strings to constants
      case "FIND_ALL_WIDGETS": 
          return {
            widgets: action.widgets
          }
      case "CREATE_WIDGET":
          return {
            widgets: [
                ...state.widgets,
                action.widget
            ]
        }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets
            }
      case "UPDATE_WIDGET":
        return {
          widgets: state.widgets.map(widget =>
            widget._id === action.widget._id ? action.widget : widget
          )
        };
      // case "DELETE_WIDGET":
      //   return {
      //     widgets: state.widgets.filter(widget => widget._id !== action.widgetId)
      // }
      default:
          return state
  }
}

export default widgetRuducer;