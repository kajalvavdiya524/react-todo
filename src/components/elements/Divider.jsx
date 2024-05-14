import React, { useMemo } from "react";

export default function Divider(props) {
  const { className = "", type = "horizontal", ...otherProps } = props;

  const getTypeBaseClass = useMemo(
    () => (type === "vertical" ? "border-r self-stretch" : "border-b"),
    [type]
  );

  return (
    <div className={`${getTypeBaseClass} ${className}`} {...otherProps}></div>
  );
}
