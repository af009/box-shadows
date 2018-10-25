import React, { Component } from "react";
import Boxs from "./boxs.js";

class App extends Component {
  state = {
    boxs: Boxs,
    boxCss: "CSS Here",
    badge: ""
  };

  handleClick = styles => {
    this.setState({ badge: "" });
    let {
      boxShadow,
      borderBottom,
      borderColor,
      borderStyle,
      borderWidth,
      background
    } = styles;
    let boxCss;
    boxShadow = `box-shadow: ${boxShadow};`;

    if (borderColor && borderStyle && borderWidth && background) {
      borderColor = `border-color:${borderColor};`;
      borderStyle = `border-style:${borderStyle};`;
      borderWidth = `border-width:${borderWidth};`;
      background = `background:${background};`;
      boxCss = boxShadow + borderColor + borderStyle + borderWidth + background;
    } else if (borderBottom) {
      borderBottom = `border-bottom:${borderBottom};`;
      boxCss = borderBottom + boxShadow;
    } else if (background) {
      borderBottom = `background:${background};`;
      boxCss = borderBottom + boxShadow;
    } else {
      boxCss = boxShadow;
    }

    this.setState({ boxCss });
  };

  handleCopy = () => {
    const copyCSS = document.getElementById("copy-target");
    copyCSS.select();
    document.execCommand("copy");
    this.setState({ badge: "copied!" });
  };

  render() {
    const { boxs } = this.state;
    return (
      <div className="container-fluid">
        {" "}
        <h1 className="text-center display-3 font-weight-bold m-5 ">
          {" "}
          Box Shadows
        </h1>
        <div className="container">
          <div className="input-group input-group-lg row">
            <input
              className="col-lg-9 form-control text-center text-warning lead border bg-dark p-4"
              id="copy-target"
              readOnly={true}
              value={this.state.boxCss}
            />
            <button
              className="col-lg-2 btn btn-info btn-lg"
              onClick={this.handleCopy}
            >
              Copy
            </button>
            <span className="col-lg-1 text-success display-5 text-center p-4">
              {this.state.badge}
            </span>
          </div>
        </div>
        <div className="grid m-5">
          {boxs.map(box => {
            return (
              <div
                className="card text-center p-3"
                style={box.styles}
                value={box.styles}
                key={box.id}
                id={box.id}
                onClick={() => this.handleClick(box.styles)}
              >
                {" "}
                <h4 className="text-center">
                  {box.name} {box.id}{" "}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
