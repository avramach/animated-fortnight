import React from "react";

export default class ProgressBar extends React.Component {
  render() {
    const containerStyle = {
      width: "45%"
    };
    return (
        <div class="progress progress-striped active">
          <div class="progress-bar" style={containerStyle}></div>
        </div>
    );
  }
}
