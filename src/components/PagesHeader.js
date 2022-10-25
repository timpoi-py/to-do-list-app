import React from "react";
import "../css/styles.js";

const PagesHeader = (props) => {
  return <div className="pages-header">{props.children}</div>;
};

export default PagesHeader;
