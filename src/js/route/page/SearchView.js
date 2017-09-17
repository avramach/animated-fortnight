import React from "react";
import SearchResult from "../component/smart/SearchResult";

export default class SearchView extends React.Component {
  render() {
    return (
      <div>
      <h1>SearchView {this.props.params.searchKey}</h1>
      <SearchResult searchKey ={this.props.params.searchKey} history = {this.props.history}/>
      </div>
    );
  }
}
