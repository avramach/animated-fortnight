import React from "react";

export default class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKey: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.searchClicked(this.state.searchKey);
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
     //if (event.keyCode == 13)
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div id="custom-search-input">
            <div class="input-group col-md-12">
              <input type="text" class="search-query form-control" id="searchKey" placeholder="Search" onChange={e => this.change(e)}/>
              <span class="input-group-btn">
                <button class="btn btn-danger" type="button" onClick={e => this.onSubmit(e)}>
                  <span class=" glyphicon glyphicon-search" ></span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
