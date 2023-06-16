import React from "react";

export const DialogBox = (props) => {
  return (
    <div className="dialog d-flex gap-2 py-4 px-3 rounded bg-white ">
      <span onClick={props.close} className="icon-close"><ion-icon name="close"></ion-icon></span>
      <span className="icon-alert"><ion-icon name="alert-circle"></ion-icon></span>
      <p>Unable to parse color from string</p>
    </div>
  );
};
