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
    <Heading1 dark={args.dark}>{args.text}</Heading1>
    <Heading2>Heading2</Heading2>
    <Heading3>Third Heading - {args.text}</Heading3>

    <Para>{data.txts[2]}</Para>
    <Para>{data.txt}</Para>
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

export const DarkMode = Template.bind({});
DarkMode.args = {
  text: "Dark  Mode",
  label: "Dark Mode Sample",
  dark: true,
};

export const NormalMode = Template.bind({});
NormalMode.args = {
  text: "Normal Mode",
  label: "Normal Sample",
  dark: false,
};

export const H1Default = (args) => <Heading1 {...args}>Heading1</Heading1>;
export const H1Dark = () => <Heading1 dark>Heading1</Heading1>;
export const H2 = (args) => <Heading2 {...args}>Heading Two</Heading2>;
export const H3 = (args) => <Heading3 {...args}>Heading Three</Heading3>;
