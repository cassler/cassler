/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import data from "../../_util/faker.json";

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Para,
  Caption,
  Spacer,
  Divider,
} from "./Typography";

export default {
  component: Heading1,
  title: "Design System/H1",
  argTypes: {
    text: { control: "text" },
    dark: { control: "boolean" },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => (
  <>
    <Heading1 {...args}>{args.text}</Heading1>
    <Heading2 {...args}>{args.text}</Heading2>
    <Heading3 {...args}>{args.text}</Heading3>

    <Para {...args}>{data.txts[2]}</Para>
    <Para {...args}>{data.txt}</Para>
    <Divider />
    <Heading4 {...args}>{args.text}</Heading4>
    <Caption {...args}>{data.txts[0]}</Caption>
    <Spacer />
    <Heading4 {...args}>{args.text}</Heading4>
    <Caption {...args}>{data.txts[0]}</Caption>
  </>
);

export const Main = Template.bind({});
Main.args = { text: "My Heading", dark: true };

export const Primary = Template.bind({});
Primary.args = { text: "Normal Mode", dark: false };
