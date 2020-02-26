export const DELETE_WIDGET= "DELETE_WIDGET"
export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const CREATE_WIDGET = "CREATE_WIDGET"
export const createWidget = (widget) => ({
    type: CREATE_WIDGET,
    wigdget: widget
})

export const FIND_WIDGETS_FOR_TOPIC= "FIND_WIDGETS_FOR_TOPIC"
export const findWidgetsForTopic = (widgets) => ({
          type: FIND_WIDGETS_FOR_TOPIC,
          widgets: widgets
});

export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const updateWidget = (actualWidget) => ({
          type: UPDATE_WIDGET,
          widget: actualWidget
});
