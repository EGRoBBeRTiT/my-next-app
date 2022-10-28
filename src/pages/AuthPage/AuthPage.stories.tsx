import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AuthPage } from "./AuthPage";

export default {
  title: "Pages/AuthPage",
  component: AuthPage,
} as ComponentMeta<typeof AuthPage>;

const Template: ComponentStory<typeof AuthPage> = (args) => (
  <AuthPage {...args} />
);

export const Default = Template.bind({});
