/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";

const base = (dark?: boolean) => css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0.25rem 0;
  margin: 0;
  line-height: 1.5em;
  letter-spacing: -0.01666em;
  color: ${dark ? "#ddd" : "#333"};
`;

const caption = (dark?: boolean) => css`
  line-height: 1.333em;
  letter-spacing: -0.01666em;
  color: ${dark ? "#ddd" : "#333"};
`;

const t = (ratio: number) => css`
  font-size: ${ratio}rem;
`;

interface TypePropsI {
  dark?: boolean;
}
export const Heading1: React.FC<TypePropsI> = ({ children, dark }) => (
  <h1 css={[base(dark), t(2.2)]}>{children}</h1>
);

export const Heading2: React.FC<TypePropsI> = ({ children, dark }) => (
  <h2 css={[base(dark), t(1.6)]}>{children}</h2>
);
export const Heading3: React.FC<TypePropsI> = ({ children, dark }) => (
  <h3 css={[base(dark), t(1.3)]}>{children}</h3>
);

export const Heading4: React.FC<TypePropsI> = ({ children, dark }) => (
  <h4 css={[base(dark), t(1.1)]}>{children}</h4>
);

export const Heading5: React.FC<TypePropsI> = ({ children, dark }) => {
  const resize = css`
    padding: 0.25rem 0 0;
  `;
  return <h4 css={[base(dark), resize, t(0.9)]}>{children}</h4>;
};

export const Para: React.FC<TypePropsI> = ({ children, dark }) => (
  <p css={[base(dark), t(0.8)]}>{children}</p>
);

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
  return <p css={[base(dark), caption(dark), t(0.7)]}>{props.children}</p>;
};
