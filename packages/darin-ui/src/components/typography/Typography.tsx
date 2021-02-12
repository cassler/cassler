/** @jsx jsx */
import { jsx } from "@emotion/react";

const resetStyle = {
  padding: "0.2em 0",
  margin: 0,
  lineHeight: "1.2em",
  color: "#9cf",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
};

export function Heading1(props) {
  return (
    <div
      css={{
        fontSize: 32,
        fontWeight: 700,
        ...resetStyle,
      }}
    >
      {props.children}
    </div>
  );
}

export function Heading2(props) {
  return (
    <div
      css={{
        fontSize: 22,
        fontWeight: 700,
        ...resetStyle,
      }}
    >
      {props.children}
    </div>
  );
}
export function Heading3(props) {
  return (
    <div
      css={{
        fontSize: 17,
        fontWeight: 700,
        ...resetStyle,
      }}
    >
      {props.children}
    </div>
  );
}
