import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
  }
  return (
    <i
      className={classes}
      onClick={props.onLike}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    />
  );
};

export default Like;
