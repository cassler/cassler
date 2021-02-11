/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Design System/Button",
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { background: "#ff0", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };
