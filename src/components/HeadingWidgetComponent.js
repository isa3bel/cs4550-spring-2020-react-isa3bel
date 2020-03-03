import React, { Component } from "react";
import {connect} from 'react-redux';


class HeadingWidget extends React.Component {
  state = {
    editing: true,
    selected: false,
    headingText: this.props.title,
    widgetName: this.props.name,
    size: 0,
    preview: false,
    type: this.props.type
  };

  isEditing() {
    this.setState({ editing: !this.state.editing });
  }

  preview() {
    this.setState({ preview: !this.state.preview });
  }

  updateNameForm = newState => {
    this.setState(newState);
  };

  clickedSave() {
    console.log('changed type');
    this.setState({ editing: !this.state.editing });
    this.setState({ headingText: this.state.headingText });

    this.props.updateWidget(this.props.widgetId, {
      title: this.state.headingText,
      type: this.state.type,
      topicId: this.props.topicId,
      id: this.props.widgetId,
      size: this.state.size,
      name: this.state.widgetName
    });
  }

  updateWidgetType = (e) => {
    // service call to update widget
    console.log("type updated")
    this.props.updateWidget(this.props.widgetId, {
      title: this.state.headingText,
      type: e.target.value,
      topicId: this.props.topicId,
      id: this.props.widgetId,
      size: this.state.size,
      name: this.state.widgetName
    });
  }

  render() {
    return (
      <div class="row justify-content-between" id="wbdv-widget-box">
        {this.state.editing && !this.state.preview && <h1>Heading Widget</h1>}
        {!this.state.editing && (
          <div>
            {this.props.size === 0 && <h1>{this.state.headingText}</h1>}
            {this.props.size === 1 && <h1>{this.state.headingText}</h1>}
            {this.props.size === 2 && <h2>{this.state.headingText}</h2>}
            {this.props.size === 3 && <h3>{this.state.headingText}</h3>}
            {this.props.size === 4 && <h4>{this.state.headingText}</h4>}
            {this.props.size === 5 && <h5>{this.state.headingText}</h5>}
            {this.props.size === 6 && <h6>{this.state.headingText}</h6>}
          </div>
        )}

        {this.state.editing && !this.state.preview && (
          <button onClick={() => this.props.moveUp({
            title: this.state.headingText,
            type: this.state.type,
            topicId: this.props.topicId,
            id: this.props.widgetId,
            size: this.state.size,
            name: this.state.widgetName
          })} type="button" class="btn btn-warning col-1 mb-3 wbdv-arrow">
            <span class="fa fa-arrow-up"></span>
          </button>
        )}

        {this.state.editing && !this.state.preview && (
          <button type="button" class="btn wbdv-arrow btn-warning col-1 mb-3">
            <span class="fa fa-arrow-down"></span>
          </button>
        )}

        {this.state.editing && !this.state.preview && (
          <div class="input-group col-3">
            <select
              class="custom-select"
              onChange={this.updateWidgetType}
            >
              <option>Choose...</option>
              <option value="HEADING">Heading</option>
              <option value="PARAGRAPH">Paragraph</option>
              <option value="LIST">List</option>
              <option value="IMAGE">Image</option>
            </select>
          </div>
        )}

        {this.state.editing && !this.state.preview && (
          <button
            onClick={() => {
              this.props.deleteWidget(this.props.widgetId);
            }}
            type="button"
            class="btn btn-danger wbdv-exitWidget mb-3 col-.5"
          >
            x
          </button>
        )}

        {this.state.editing && !this.state.preview && (
          <div class="input-group mb-3 col-12">
            <input
              placeholder="Heading Text"
              type="text"
              defaultValue={this.props.title}
              class="form-control"
              onChange={e =>
                this.updateNameForm({
                  headingText: e.target.value
                })
              }
            />
          </div>
        )}

        {this.state.editing && !this.state.preview && (
          <div class="input-group mb-3 col">
            <select
              class="custom-select"
              onChange={e => {
                const newSize = parseInt(e.target.value);
                this.setState({ size: newSize });
              }}
              value={this.state.size}
            >
              ><option>Choose...</option>
              <option value="1">Heading 1</option>
              <option value="2">Heading 2</option>
              <option value="3">Heading 3</option>
              <option value="4">Heading 4</option>
              <option value="5">Heading 5</option>
              <option value="6">Heading 6</option>
            </select>
          </div>
        )}

        {this.state.editing && !this.state.preview && (
          <div class="input-group mb-3 col-12">
            <input
              type="text"
              placeholder="Widget name"
              defaultValue={this.props.name}
              class="form-control"
              onChange={e =>
                this.updateNameForm({
                  widgetName: e.target.value
                })
              }
            />
          </div>
        )}

        <div class="col">
          {this.state.editing && !this.state.preview && <h3>Preview</h3>}
          {this.state.editing && (
            <div>
              {this.state.size === 0 && <h1>{this.state.headingText}</h1>}
              {this.state.size === 1 && <h1>{this.state.headingText}</h1>}
              {this.state.size === 2 && <h2>{this.state.headingText}</h2>}
              {this.state.size === 3 && <h3>{this.state.headingText}</h3>}
              {this.state.size === 4 && <h4>{this.state.headingText}</h4>}
              {this.state.size === 5 && <h5>{this.state.headingText}</h5>}
              {this.state.size === 6 && <h6>{this.state.headingText}</h6>}
            </div>
          )}

          {this.state.editing && (
            <button
              type="button"
              class="btn btn-success"
              onClick={() => this.clickedSave()}
            >
              Save
            </button>
          )}
          {!this.state.editing && (
            <button
              type="button"
              class="btn btn-success"
              onClick={() => this.isEditing()}
            >
              Edit
            </button>
          )}
          {!this.state.preview && this.state.editing && (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => this.preview()}
            >
              Show Preview
            </button>
          )}
          {this.state.preview && this.state.editing && (
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => this.preview()}
            >
              Hide Preview
            </button>
          )}
        </div>
      </div>
    );
  }
}
export default HeadingWidget;