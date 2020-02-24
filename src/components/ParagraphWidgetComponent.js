import React, { Component } from "react";

class ParagraphWidget extends React.Component {
  state = {
    editing: false,
    selected: false,
    paragraphText: this.props.title,
    widgetName: this.props.name,
    preview: true,
    type: "PARAGRAPH"
  };

  

  isEditing() {
    this.setState({ editing: !this.state.editing });
  }

  updateNameForm = newState => {
    this.setState(newState);
  };

  preview() {
    this.setState({ preview: !this.state.preview });
  }

  clickedSave() {
    console.log('clicked paragrph save');
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
        {this.state.editing && <h3 class="col">Paragraph Widget</h3>}
        {!this.state.editing && <p>{this.state.paragraphText}</p>}

        {this.state.editing && (
          <button type="button" class="btn btn-warning col-1 mb-3 wbdv-arrow">
            <span class="fa fa-arrow-up"></span>
          </button>
        )}

        {this.state.editing && (
          <button type="button" class="btn wbdv-arrow btn-warning col-1 mb-3">
            <span class="fa fa-arrow-down"></span>
          </button>
        )}

        {this.state.editing && (
          <div class="input-group col-3">
            <select
              class="custom-select"
              onChange={e => {
                const newSize = parseInt(e.target.value);
                if (newSize === 1) {
                  this.setState({ type: "PARAGRAPH" });
                } else if (newSize === 2) {
                  this.setState({ type: "HEADING" });
                } else {
                  this.setState({ type: "HEADING" });
                }
              }}
            >
              <option>Choose...</option>
              <option value="1">Paragraph</option>
              <option value="2">Heading</option>
            </select>
          </div>
        )}

        {this.state.editing && (
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

        {this.state.editing && (
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

        {this.state.editing && (
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
          {this.state.editing && this.state.preview && <h3>Preview</h3>}
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
