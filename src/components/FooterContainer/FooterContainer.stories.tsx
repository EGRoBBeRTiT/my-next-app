import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterContainer } from "./FooterContainer";

export default {
  title: "Components/FooterContainer",
  component: FooterContainer,
} as ComponentMeta<typeof FooterContainer>;

const Template: ComponentStory<typeof FooterContainer> = (args) => (
  <FooterContainer {...args} />
);

export const Default = Template.bind({});
