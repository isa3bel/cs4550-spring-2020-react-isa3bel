import React, { Component } from "react";
import HeadingWidget from "./HeadingWidgetComponent";
import ParagraphWidget from "./ParagraphWidgetComponent";
import { connect } from "react-redux";
import widgetService from "../services/WidgetService";

class WidgetList extends React.Component {
  componentDidMount() {
    //this.props.findWidgetsForTopic(this.props.topicId);
   this.props.findAllWidgets();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
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
              widget => //console.log(JSON.stringify(widget)+ 'widgetssss')
                (widget.type === "HEADING" && (
                  <HeadingWidget
                  title={widget.title}
                    deleteWidget={this.props.deleteWidget}
                    topicId={this.props.topicId}
                    widgetId={widget.id}
                    updateWidget={this.props.updateWidget}
                  />
                )) ||
                (widget.type === "PARAGRAPH" && (
                  <ParagraphWidget
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
      fetch(`https://cs4550-sp2020-isabel-bolger-1.herokuapp.com/widgets`)
        .then(response => response.json())
        .then(actualWidgets => {
          return dispatch({
            type: "FIND_ALL_WIDGETS",
            widgets: actualWidgets
          });
        }),

    findWidgetsForTopic: (tid) =>
    fetch(`https://cs4550-sp2020-isabel-bolger-1.herokuapp.com/api/topics/${tid}/widgets`)
        .then(response => response.json())
        .then(actualWidgets => dispatch({
            type: "FIND_WIDGETS_FOR_TOPIC",
            widgets: actualWidgets
        })),

    addWidget: (topicId, widget) =>
      fetch(`https://cs4550-sp2020-isabel-bolger-1.herokuapp.com/api/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({
            title: "New  Widget",
            id: new Date().getTime() + "",
        }),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(widget => dispatch({ type: "CREATE_WIDGET", widget: widget })),

    updateWidget: (wid, widget) =>
      fetch(`https://cs4550-sp2020-isabel-bolger-1.herokuapp.com/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(status => dispatch({ type: "UPDATE_WIDGET", widget: status })),

    deleteWidget: wid => {
        console.log(wid + "widget id in delete");
      return fetch(`https://cs4550-sp2020-isabel-bolger-1.herokuapp.com/api/widgets/${wid}`, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(status => dispatch({ type: "DELETE_WIDGET", widgetId: wid }))}
  };
};

export default connect(
  stateToPropertyMapper,
  dispatcherToPropertyMapper
)(WidgetList);
