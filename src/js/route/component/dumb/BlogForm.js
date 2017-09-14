import React from "react";

export default class BlogForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      image: "",
      category: "",
      blogMessage: ""
    };
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    ////console.log("onsubmit of blogform ", this.state)
    this.props.onSubmit(this.state);
  }

  onReset = e => {
    e.preventDefault();
    this.setState({[e.target.name]: ""});
  }

  render() {
    ////console.log("BlogForm Rendered");
    return (
      <div>
        <form class="form-horizontal">
          <fieldset>
            <legend>
              <h1>Create a New Blog Entry
              </h1>
            </legend>
            <div class="form-group">
              <label for="title" class="col-lg-2 control-label">Title</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="title" onChange={e => this.change(e)}></input>
              </div>
            </div>
            <div class="form-group">
              <label for="image" class="col-lg-2 control-label">Image</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="image" onChange={e => this.change(e)}></input>
              </div>
            </div>
            <div class="form-group">
              <label for="category" class="col-lg-2 control-label">Category</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="category" onChange={e => this.change(e)}></input>
              </div>
            </div>
            <div class="form-group">
              <label for="blogMessage" class="col-lg-2 control-label">Content</label>
              <div class="col-lg-10">
                <textarea class="form-control" rows="3" id="blogMessage" onChange={e => this.change(e)}></textarea>
                <span class="help-block">Enter the content</span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-10 col-lg-offset-2">
                <button type="reset" class="btn btn-default" onClick={e => this.onReset(e)}>Cancel</button>
                <button type="submit" class="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
