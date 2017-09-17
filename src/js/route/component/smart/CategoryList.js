import React from "react";
import {connect} from "react-redux"

import Category from "../dumb/Category";
import BlogList from "../smart/BlogList";
import {fetchCategories} from "../../../action/blogActions"
import {resetBlogCategoryStore} from "../../../action/blogActions"
import {resetBlogStore} from "../../../action/blogActions"
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";

@connect((store) => {
  return {categoryfetched: store.blogs.categoryfetched, categoryfetching: store.blogs.categoryfetching, categoryError: store.blogs.categoryError, categoryList: store.blogs.categoryList};
})

export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCategory: {
        category: "",
        count: 0
      }
    };
    this.navigateClicked = this.navigateClicked.bind(this);
  }

  componentWillMount() {
    this.selectCategory(this.props.category, 0);
    this.props.dispatch(resetBlogCategoryStore());
    this.props.dispatch(fetchCategories());
  }

  selectCategory(newCategory, newCount) {
    var selectedCategory = {
      category: newCategory,
      count: newCount
    }
    this.setState(prevState => ({
      selectedCategory: {
        ...prevState.selectedCategory,
        ...selectedCategory
      }
    }))
  }

  navigate(category) {
    const {categoryList} = this.props;
    var index = categoryList.findIndex(function(categoryListItem) {
      return categoryListItem.category == category;
    });
    const selectedCategory = categoryList[index];
    this.selectCategory(selectedCategory.category, selectedCategory.count);
  }

  navigateClicked = e => {
    this.navigate(e.target.id);
  }

  render() {
    const {categoryList} = this.props;
    const {categoryfetched} = this.props;
    const {categoryfetching} = this.props;
    const {categoryError} = this.props;
    const {selectedCategory} = this.state;

    if (categoryfetched === true) {
      const categoriesListItem = categoryList.map((category, i) => <Category key={i} {...category} navigateClicked={this.navigateClicked}/>);

      var blogCategory = selectedCategory.category;
      if (blogCategory === undefined) {
        blogCategory = categoryList[0].category;
      }

      return (
        <div>
          <h4>categoryList</h4>
          <hr></hr>
          <div>{categoriesListItem}</div>
          <hr></hr>
          <h4>BlogList : {blogCategory}</h4>
          <hr></hr>
          <BlogList category={blogCategory}/>
        </div>
      );
    } else if (categoryError) {
      return (<ErrorIndicator/>);
    } else {
      return (<ProgressBar/>);
    }
  }
}
