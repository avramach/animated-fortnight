import React from "react";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
export default class BasicLayout extends React.Component {

  render() {
    const {location} = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("Basiclayout Rendered");
    return (
      <div>
        <NavBar location={location}/>

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </div>

          <Footer/>
        </div>
      </div>
    );
  }
}
