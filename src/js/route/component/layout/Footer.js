import React from "react";

export default class Footer extends React.Component {
  render() {
    const footerStyle = {
      position: "absolute",
      right: 0,
      bottom: 0,
      left: 0,
      padding: "1rem",
      backgroundColor: "#efefef",
      textAlign: "center"
    };

    return (
      <footer>
        <div class="footer" style={footerStyle}>
          <strong>CleanBlog v:1.0</strong>
        </div>
      </footer>
    );
  }
}
