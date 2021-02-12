/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";

const base = css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0.25rem 0;
  margin: 0;
  line-height: 1.5em;
  letter-spacing: -0.01666em;
  color: #ddd;
`;

const caption = css`
  line-height: 1.333em;
  letter-spacing: -0.01666em;
  color: #999;
`;
const darkStyle = css`
  color: #333;
`;
const t = (ratio: number) => css`
  font-size: ${ratio}rem;
`;

interface TypePropsI {
  dark?: boolean;
}
export const Heading1: React.FC<TypePropsI> = (props) => {
  const { dark } = props;
  return <h1 css={[base, dark && darkStyle, t(2.2)]}>{props.children}</h1>;
};

export const Heading2: React.FC<TypePropsI> = (props) => {
  const { dark } = props;
  return <h2 css={[base, dark && darkStyle, t(1.6)]}>{props.children}</h2>;
};
export const Heading3: React.FC<TypePropsI> = (props) => {
  const { dark } = props;
  return <h3 css={[base, dark && darkStyle, t(1.3)]}>{props.children}</h3>;
};

export const Heading4: React.FC<TypePropsI> = (props) => {
  const { dark } = props;
  return <h4 css={[base, dark && darkStyle, t(1.1)]}>{props.children}</h4>;
};

export const Heading5: React.FC<TypePropsI> = (props) => {
  const { dark } = props;
  const resize = css`
    padding: 0.25rem 0 0;
    color: rgba(100, 100, 100, 0.9);
  `;
  return (
    <h4 css={[base, dark && darkStyle, resize, t(0.9)]}>{props.children}</h4>
  );
};

export const Para: React.FC<TypePropsI> = (props) => {
  const { dark } = props;
  return <p css={[base, dark && darkStyle, t(0.8)]}>{props.children}</p>;
};

export const Spacer: React.FC = () => (
  <div
    css={css`
      height: 0.5rem;
    `}
  />
);

export const Divider: React.FC = () => (
  <React.Fragment>
    <Spacer />
    <div
      css={css`
        height: 0;
        margin: 0.25rem 0;
        border-top: 1px solid rgba(120, 120, 120, 0.3);
      `}
    />
    <Spacer />
  </React.Fragment>
);
export const Caption: React.FC<TypePropsI> = (props) => {
  const { dark } = props;
  return (
    <p
      css={[
        base,
        caption,
        dark &&
          css`
            color: #888;
          `,
        t(0.7),
      ]}
    >
      {props.children}
    </p>
  );
};
