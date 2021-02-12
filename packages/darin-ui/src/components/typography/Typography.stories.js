/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import data from "../../_util/faker.json";

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Para,
  Caption,
  Spacer,
  Divider,
} from "./Typography";

export default {
  component: Heading1,
  title: "Design System/Typography",
  argTypes: {
    text: { control: "text" },
    dark: { control: "boolean" },
  },
  parameters: {
    background: "light",
  },
  subcomponents: {
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Para,
    Caption,
    Spacer,
    Divider,
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => (
  <>
    <Heading1 {...args}>{args.text}</Heading1>
    <Heading2 {...args}>Heading2</Heading2>
    <Heading3 {...args}>Third Heading - {args.text}</Heading3>

    <Para {...args}>{data.txts[2]}</Para>
    <Para {...args}>{data.txt}</Para>
    <Divider />
    <Heading4 {...args}>{args.text}</Heading4>
    <Spacer />
    <Heading5 {...args}>{args.text}</Heading5>
    <Caption {...args}>{data.txts[0]}</Caption>
    <Spacer />
    <Heading5 {...args}>{args.text}</Heading5>
    <Caption {...args}>{data.txts[0]}</Caption>
  </>
);

export const Main = Template.bind({});
Main.args = {
  text: "Dark  Mode",
  dark: true,
  parameters: { background: "dark" },
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Normal Mode",
  dark: false,
  parameters: { background: "light" },
};
