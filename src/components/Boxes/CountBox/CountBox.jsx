import * as React from "react";

import { EmojiSmile, JournalRichtext, Headset, Award } from "react-bootstrap-icons";

import "./CountBox.scss";

const CountBox = ({ count, children, icon }) => {

  let boxIcon = undefined;

  if (icon === 'smile') {
    boxIcon = <EmojiSmile className="icon-box"/>
  } else if (icon === 'file') {
    boxIcon = <JournalRichtext className="icon-box"/>
  } else if (icon === 'headset') {
    boxIcon = <Headset className="icon-box"/>
  } else if (icon === 'award') {
    boxIcon = <Award className="icon-box"/>
  }

  return (
    <div className="count-box">
      { boxIcon }
      <span>{count}</span>
      <p>{children}</p>
    </div>
  );
};

export default CountBox;
