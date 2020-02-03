import React, {Component} from 'react';

class WidgetList extends React.Component {

  render() {
    return(
      <div>
      <div class="container-fluid">
      
      <div class="row d-flex justify-content-around">
          <button type="button"
              class="btn btn-success">Save</button>
          <div class="custom-control custom-switch">
              <input type="checkbox"
                  class="custom-control-input"
                  id="customSwitch1"/> <label
                  class="custom-control-label"
                  for="customSwitch1">Preview</label>
          </div>
      </div>

      <div class="row" id="wbdv-widget-box">

          <h3 class="col">Heading Widget</h3>

          <button type="button"
              class="btn btn-warning col-1 mb-3 wbdv-arrow">
              <span class="fa fa-arrow-up"></span>
          </button>

          <button type="button"
              class="btn wbdv-arrow btn-warning col-1 mb-3">
              <span class="fa fa-arrow-down"></span>
          </button>

          <div class="input-group col-3">
              <select class="custom-select">
                  <option>Choose...</option>
                  <option value="1" selected>Heading</option>
                  <option value="2">HTML</option>
                  <option value="3">Slides</option>
              </select>
          </div>

          <button type="button"
              class="btn btn-danger wbdv-exitWidget mb-3 col-.5">x</button>


          <div class="input-group mb-3 col-12">
              <input placeholder="Heading Text"
                  type="text" class="form-control"/>
          </div>

          <div class="input-group mb-3 col">
              <select class="custom-select">
                  <option selected>Choose...</option>
                  <option selected value="1">Heading
                      1</option>
                  <option value="2">Heading 2</option>
                  <option value="3">Heading 3</option>
              </select>
          </div>

          <div class="input-group mb-3 col-12">
              <input type="text"
                  placeholder="Widget name"
                  class="form-control"/>
          </div>

          <div class="col">
              <h3>Preview</h3>
              <h1>Heading text</h1>
          </div>
      </div>

      <div class="d-flex justify-content-end ">
          <button type="button"
              class="btn btn-success col-sm-12 col-md-1">+</button>
      </div>
    </div>
    </div>
    )
  }



}

export default WidgetList;