import React, { Component } from "react";
import HeadingWidget from "./HeadingWidgetComponent";
import ParagraphWidget from "./ParagraphWidgetComponent";
import { connect } from "react-redux";
import widgetService from "../services/WidgetService";

class WidgetList extends React.Component {
  componentDidMount() {
    this.props.findWidgetsForTopic(this.props.topicId);
    //this.props.findAllWidgets();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("Widget list updated", this.props.widgets)
    if (prevProps.topicId != this.props.topicId) {
      this.props.findWidgetsForTopic(this.props.topicId);
    }
  }

  addWidget() {
    this.props.addWidget(this.props.topicId, { title: "test" });
  }

  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row d-flex justify-content-around">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch1"
              />{" "}
            </div>
          </div>

          <ul>
            {this.props.widgets.map(
              (
                widget 
              ) =>
              
                (widget.type === "HEADING" && (
                  <HeadingWidget
                    type={widget.type}
                    title={widget.title}
                    deleteWidget={this.props.deleteWidget}
                    topicId={this.props.topicId}
                    widgetId={widget.id}
                    updateWidget={this.props.updateWidget}
                    size={widget.size}
                    name={widget.name}
                    moveUp={this.props.moveUp}
                    moveDown={this.props.moveDown}
                    widget={widget}
                  />
                )) ||
                (widget.type === "PARAGRAPH" && (
                  <ParagraphWidget
                    name={widget.name}
                    title={widget.title}
                    topicId={widget.topicId}
                    widgetId={widget.id}
                    deleteWidget={this.props.deleteWidget}
                    updateWidget={this.props.updateWidget}
                  />
                ))
            )}
          </ul>

          <div class="d-flex justify-content-end ">
            <button
              type="button"
              class="btn btn-success col-sm-12 col-md-1"
              onClick={() => this.addWidget()}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const stateToPropertyMapper = state => ({
  widgets: state.widgets.widgets
});

const dispatcherToPropertyMapper = dispatch => {
  return {
    findAllWidgets: () =>
      widgetService.findAllWidgets()
        .then(actualWidgets => {
          return dispatch({
            type: "FIND_ALL_WIDGETS",
            widgets: actualWidgets
          });
        }),

    findWidgetsForTopic: tid =>
      widgetService.findWidgetsForTopic(tid)
        .then(actualWidgets =>
          dispatch({
            type: "FIND_WIDGETS_FOR_TOPIC",
            widgets: actualWidgets
          })
        ),

    addWidget: (topicId, widget) =>
      widgetService.createWidget(topicId)
        .then(widget => dispatch({ type: "CREATE_WIDGET", widget: widget })),

    updateWidget: (wid, widget) => {
     widgetService.updateWidget(wid, widget)
        .then(status => dispatch({ type: "UPDATE_WIDGET", widget: widget }));
    },

    deleteWidget: wid => {
      widgetService.deleteWidget(wid)
        .then(status => dispatch({ type: "DELETE_WIDGET", widgetId: wid }));
    },

    moveUp: (wid, widget) => {
        console.log('move up')
        return fetch(`http://localhost:8080/widgets`)
        .then(response => response.json())
        .then(status => dispatch({ type: "MOVE_UP", widget: widget }));
    },
    moveDown: (wid, widget) => {
        console.log('move down')
        return fetch(`http://localhost:8080/widgets`)
        .then(response => response.json())
        .then(status => dispatch({ type: "MOVE_DOWN", widget: widget }));
    }
  };
};

export default connect(
  stateToPropertyMapper,
  dispatcherToPropertyMapper
)(WidgetList);
