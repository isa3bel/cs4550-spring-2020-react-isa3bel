import React, { Component } from "react";

class HeadingWidget extends React.Component {
  state = {
    editing: false,
    selected: false,
    headingText: "",
    widgetName: "",
    size: "",
    preview: true,
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
    this.setState({ editing: !this.state.editing });
    this.props.updateWidget(this.props.widgetId, {
      title: this.state.headingText,
      _id: this.props.widgetId,
      size: this.state.size,
      widgetName: this.state.widgetName
    });
  }

  render() {
    return (
      <div class="row" id="wbdv-widget-box">
        {this.state.editing && <h1>Heading Widget</h1>}
        {this.state.editing && (
          <div>
            {this.state.size === 1 && <h1>{this.props.title}</h1>}
            {this.state.size === 2 && <h2>{this.props.title}</h2>}
            {this.state.size === 3 && <h3>{this.props.title}</h3>}
            {this.state.size === 4 && <h4>{this.props.title}</h4>}
            {this.state.size === 5 && <h5>{this.props.title}</h5>}
            {this.state.size === 6 && <h6>{this.props.title}</h6>}
          </div>
        )}

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
            <select class="custom-select">
              <option>Choose...</option>
              <option value="1" selected>
                Heading
              </option>
              <option value="2">Paragraph</option>
            </select>
          </div>
        )}

        {this.state.editing && (
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

        {this.state.editing && (
          <div class="input-group mb-3 col-12">
            <input
              placeHolder="Heading Text"
              type="text"
              class="form-control"
              onChange={e =>
                this.updateNameForm({
                  headingText: e.target.value
                })
              }
            />
          </div>
        )}

        {this.state.editing && (
          <div class="input-group mb-3 col">
            <select
              class="custom-select"
              onChange={e => {
                const newSize = parseInt(e.target.value);
                this.setState({ size: newSize });
              }}
              value={this.state.size}
            >
              ><option selected>Choose...</option>
              <option selected value="1">
                Heading 1
              </option>
              <option value="2">Heading 2</option>
              <option value="3">Heading 3</option>
              <option value="4">Heading 4</option>
              <option value="5">Heading 5</option>
              <option value="6">Heading 6</option>
            </select>
          </div>
        )}

        {this.state.editing && (
          <div class="input-group mb-3 col-12">
            <input type="text" placeholder="Widget name" class="form-control" />
          </div>
        )}

        <div class="col">
          {this.state.editing && this.state.preview && <h3>Preview</h3>}
          {this.state.editing && this.state.preview && <h1>{this.state.headingText}</h1>}
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
