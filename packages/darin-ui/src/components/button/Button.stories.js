/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import WidgetButton from "./WidgetZone";

export default {
  component: WidgetButton,
  title: "Design System/Button",
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
    dark: { control: "boolean" },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  widget: {
    id: '11eb66ab-cae3-0bde-9810-02453e99dd6d',
    label: 'Video Walkthrough',
    displayMode: 'ICON',
    widgetPosition: {
      zoneName: 'VEHICLE_REPUTATION',
      panelName: 'PANEL_ALL',
      positionIndex: 3
    },
    behaviorMode: 'MODAL_INLINE',
    cssClassName: null,
    previewImageUrl: 'https://velocity-vdp-prod-attachments.s3.amazonaws.com/Velocity+Automotive+Solutions/widgets/icons/walkaround.jpg',
    documentContentType: 'text/html',
    documentType: 'VIDEO_WALKTHROUGH',
    widgetData: {
      widgetType: 'DOCUMENT_VIEWER',
      label: 'Video Walkthrough',
      contentType: 'text/html',
      documentUrl: 'https://www.beavertoyotacumming.com/take-the-tour/'
    },
    favorite: true }
}

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "My dark button", dark: true };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };
