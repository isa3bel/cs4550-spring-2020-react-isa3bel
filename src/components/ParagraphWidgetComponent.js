import React, { Component } from "react";

class ParagraphWidget extends React.Component {
  state = {
    editing: true,
    selected: false,
    paragraphText: this.props.title,
    widgetName: this.props.name,
    preview: false,
    type: "PARAGRAPH"
  };

  

  isEditing() {
    this.setState({ editing: !this.state.editing });
  }

  updateNameForm = newState => {
    this.setState(newState);
  };

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

  preview() {
    this.setState({ preview: !this.state.preview });
  }

  clickedSave() {
    this.setState({ editing: !this.state.editing });
    this.setState({ paragraphText: this.state.paragraphText });
    this.props.updateWidget(this.props.widgetId, {
      title: this.state.paragraphText,
      id: this.props.widgetId,
      topicId: this.props.topicId,
      type: this.state.type,
      size: 0,
      name: this.state.widgetName
    });
  }

  render() {
    return (
      <div class="row" id="wbdv-widget-box">
        {this.state.editing && !this.state.preview && <h3 class="col">Paragraph Widget</h3>}
        {!this.state.editing && <p>{this.state.paragraphText}</p>}

        {this.state.editing && !this.state.preview && (
          <button type="button" class="btn btn-warning col-1 mb-3 wbdv-arrow">
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
              <option value="PARAGRAPH">Paragraph</option>
              <option value="HEADING">Heading</option>
            </select>
          </div>
        )}

        {this.state.editing && !this.state.preview && (
          <button
            type="button"
            class="btn btn-danger wbdv-exitWidget mb-3 col-.5"
            onClick={() => {
              this.props.deleteWidget(this.props.widgetId);
            }}
          >
            x
          </button>
        )}

        {this.state.editing && !this.state.preview && (
          <div class="input-group mb-3 col-12">
            <textarea
              placeholder="Paragraph text"
              defaultValue={this.props.title}
              type="text"
              class="form-control"
              onChange={e =>
                this.updateNameForm({
                  paragraphText: e.target.value
                })
              }
            />
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
          {this.state.editing && <p>{this.state.paragraphText}</p>}

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
          {this.state.editing && !this.state.preview && (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => this.preview()}
            >
              Show Preview
            </button>
          )}

          {this.state.editing && this.state.preview && (
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

export default ParagraphWidget;
