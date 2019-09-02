import React from "react";
import css from "../../style/vendor/bootstrap.css";

export default class Main extends React.Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.row}>
          <div className={css["col-6"]}>
            <h1 className={css["text-center"]}>Hello World!</h1>
          </div>
          <div className={css["col-6"]}>
            <h1 className={css["text-center"]}>It's Hunter!</h1>
          </div>
        </div>
      </div>
    );
  }
}
