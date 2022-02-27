import React from "react";

export interface Props {
  wrap: boolean;
  direction: "row" | "column";
}

const Wrapper: React.FC<Props> = ({ wrap, direction, children }) => {
  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        flexWrap: wrap ? "wrap" : "nowrap",
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};
export default Wrapper;
