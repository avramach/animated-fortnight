import React from "react";
import {Link} from "react-router";

export default class Blog extends React.Component {
  render() {
    return (
      <div>
      <h1>Categories TAb</h1>
      <ul class="nav nav-tabs">
      <li class="active"><a href="#home" data-toggle="tab">Home</a></li>
      <li><a href="#profile" data-toggle="tab">Profile</a></li>
      <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
      Dropdown <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
      <li><a href="#dropdown1" data-toggle="tab">Action</a></li>
      <li class="divider"></li>
      <li><a href="#dropdown2" data-toggle="tab">Another action</a></li>
      </ul>
      </li>
      </ul>
      <div id="myTabContent" class="tab-content">
      <div class="tab-pane fade active in" id="home">
      <p>ABCD1</p>
      </div>
      <div class="tab-pane fade" id="profile">
      <p>ABCD2</p>
      </div>
      <div class="tab-pane fade" id="dropdown1">
      <p>ABCD3</p>
      </div>
      <div class="tab-pane fade" id="dropdown2">
      <p>ABCD4</p>
      </div>
      </div>
      </div>
    );
  }
}
