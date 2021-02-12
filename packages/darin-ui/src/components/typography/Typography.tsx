/** @jsx jsx */
import { jsx, css, useTheme } from '@emotion/react'
import React from 'react';

const base = css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0.25rem 0;
  margin: 0;
  line-height: 1.5em;
  letter-spacing: -0.01666em;
`;


interface TypePropsI {

}
export const Heading1: React.FC<TypePropsI> = ({ children }) => {
  const { bodyText } = useTheme();
  return <h1 css={css`
    color: ${bodyText};
    font-size: 2.2rem;
    ${base}
  `}>{children}</h1>
};

export const Heading2: React.FC<TypePropsI> = ({ children }) => {
  const { bodyText } = useTheme();
  return <h2 css={css`
    color: ${bodyText};
    font-size: 2.2rem;
    ${base}
  `}>{children}</h2>
};

export const Heading3: React.FC<TypePropsI> = ({ children }) => {
  const { bodyText } = useTheme();
  return <h3 css={css`
    color: ${bodyText};
    font-size: 1.6rem;
    ${base}
  `}>{children}</h3>
};

export const Heading4: React.FC<TypePropsI> = ({ children }) => {
  const { bodyText } = useTheme();
  return <h4 css={css`
    color: ${bodyText};
    font-size: 1.2rem;
    ${base}
  `}>{children}</h4>
};

export const Heading5: React.FC<TypePropsI> = ({ children }) => {
  const { bodyText } = useTheme();
  return <h5 css={css`
    color: ${bodyText};
    font-size: 1rem;
    ${base}
  `}>{children}</h5>
};

export const Para: React.FC<TypePropsI> = ({ children }) => {
  const { bodyText } = useTheme();
  return <p css={css`
    color: ${bodyText};
    font-size: 1rem;
    ${base}
  `}>{children}</p>
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
  const { captionText }  = useTheme();
  return <p css={css`
    color: ${captionText};
    ${base}
  `}>{props.children}</p>;
};
