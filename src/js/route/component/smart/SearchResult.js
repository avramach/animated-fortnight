import React from "react";
import {connect} from "react-redux"

import SearchForm from "../dumb/SearchForm";
import SearchResultList from "../dumb/SearchResultList";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";
import {fetchSearchResults} from "../../../action/blogActions"
import {resetSearchStore} from "../../../action/blogActions"

@connect((store) => {
  return {searchFetched: store.blogs.searchFetched, searchFetching: store.blogs.searchFetching, searchError: store.blogs.searchError, searchResults: store.blogs.searchResults};
})
export default class SearchResult extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKey: ""
    }
    this.searchClicked = this.searchClicked.bind(this);
  };

  componentWillMount() {
    this.props.dispatch(resetSearchStore());
  }

  searchClicked(searchKey) {
    this.setState({searchKey});
    this.props.dispatch(fetchSearchResults(searchKey));
  }

  render() {
    const {searchKey} = this.state;
    const {searchResults} = this.props;
    const {searchFetched} = this.props;
    const {searchFetching} = this.props;
    const {searchError} = this.props;

    let RenderObj = null ;
    let RenderSearchBar = (<SearchForm searchClicked={this.searchClicked}/>);
    if (searchFetching === true) {
      RenderObj = <ProgressBar/>;
    } else if (searchError) {
      RenderObj = <ErrorIndicator/>;
    } else if (searchFetched === true) {
      if (searchResults.length) {
        const Results = searchResults.map((result, i) => <SearchResultList key={i} {...result} searchKey={searchKey}/>);
        RenderObj = (<div class="row">{Results}</div>)
      } else {
        RenderObj = (<h1>No blogs Found : {this.state.searchKey}</h1>)
      }
    }
    return (<div>{RenderSearchBar}{RenderObj}</div>);
    }
}
