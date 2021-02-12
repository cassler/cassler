/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { Heading1, Heading2, Heading3 } from "./Typography";

export default {
  component: Heading1,
  title: "Design System/H1",
  argTypes: {
    text: { control: "text" },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => (
  <>
    <Heading1>{args.text}</Heading1>
    <Heading2>{args.text}</Heading2>
    <Heading3>{args.text}</Heading3>
  </>
);

export const Primary = Template.bind({});
Primary.args = { text: "My Heading" };
