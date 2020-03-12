import React, {Component} from 'react';

class ListWidget extends React.Component {

  state = {
    editing: true,
    widgetName: this.props.name,
    paragraphText: this.props.title,
    ordered: 1,
    preview: false,
    type: "LIST",
  };

  updateNameForm = newState => {
    this.setState(newState);
  };

  updateWidgetType = (e) => {
    this.props.updateWidget(this.props.widgetId, {
      title: this.state.paragraphText,
      type: e.target.value,
      topicId: this.props.topicId,
      id: this.props.widgetId,
      size: this.state.size,
      ordered: this.state.ordered,
      name: this.state.widgetName,
    });
  }

  isEditing() {
    this.setState({ editing: !this.state.editing });
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
      ordered: this.state.ordered,
      name: this.state.widgetName,
    });
  }

  render() {
    return(
      <div class="row" id="wbdv-widget-box">
        {this.state.editing && !this.state.preview && <h3 class="col">List Widget</h3>}
        {!this.state.editing && (
            <div>
              {this.state.ordered === 1 && <ul>{this.state.paragraphText.split('\n').map(e => <li>{e}</li>)}</ul>}
              {this.state.ordered === 2 && <ol>{this.state.paragraphText.split('\n').map(e => <li>{e}</li>)}</ol>}
            </div>
          )}

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
              <option value="LIST">List</option>
              <option value="IMAGE">Image</option>
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
              placeholder="Enter one list item per line"
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
          <div class="input-group mb-3 col">
            <select
              class="custom-select"
              onChange={e => {
                const newSize = parseInt(e.target.value);
                this.setState({ ordered: newSize});
              }}
              value={this.state.size}
            >
              >
              <option value="1">Unordered</option>
              <option value="2">Ordered</option>
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
              {this.state.ordered === 1 && <ul>{this.state.paragraphText.split('\n').map(e => <li>{e}</li>)}</ul>}
              {this.state.ordered === 2 && <ol>{this.state.paragraphText.split('\n').map(e => <li>{e}</li>)}</ol>}
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

export default ListWidget;