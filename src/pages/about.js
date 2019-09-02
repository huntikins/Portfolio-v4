import React from "react";
import ReactDOM from "react-dom";
import Menu from "components/menu/Menu";
import Main from "components/main/About";

ReactDOM.render(<Menu />, document.getElementById("menu"));
ReactDOM.render(<Main />, document.getElementById("main-about"));
