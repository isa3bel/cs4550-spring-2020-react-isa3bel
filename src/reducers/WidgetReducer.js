const widgets = [
  { id: "123", title: "W1" },
  { id: "456", title: "W2" },
  { id: "789", title: "W3" }
];

const reorderWidgets = (widgets, from, to) => {
  widgets = widgets.map((widget, index) => {
    switch (index) {
      case from:
        return widgets[to];
      case to:
        return widgets[from];
      default:
        return widget;
    }
  });
  return widgets;
};

const widgetRuducer = (state = { widgets: widgets }, action) => {
  switch (action.type) {
    // TODO: move all strings to constants
    case "FIND_ALL_WIDGETS":
      return {
        widgets: action.widgets
      };
    case "CREATE_WIDGET":
      return {
        widgets: [...state.widgets, action.widget]
      };
    case "MOVE_UP": {
      let upIndex = state.widgets.indexOf(action.widget) - 1;

      const orderedWidgets = reorderWidgets(
        state.widgets,
        upIndex + 1,
        upIndex
      );
      return {
        // widgets: widgetService.findAllWidgets()
        widgets: orderedWidgets
      }
    }

    case "MOVE_DOWN": {
      let downIndex = state.widgets.indexOf(action.widget) + 1;

      const orderedWidgets = reorderWidgets(
        state.widgets,
        downIndex - 1,
        downIndex
      );

      return {
        // widgets: widgetService.findAllWidgets()
        widgets: orderedWidgets
      }
    }
    case "FIND_WIDGETS_FOR_TOPIC":
      return {
        widgets: action.widgets
      };
    case "UPDATE_WIDGET":
      return {
        widgets: state.widgets.map(widget =>
          widget.id === action.widget.id ? action.widget : widget
        )
      };
    case "DELETE_WIDGET":
      return {
        widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
      };
    default:
      return state;
  }
};

export default widgetRuducer;
