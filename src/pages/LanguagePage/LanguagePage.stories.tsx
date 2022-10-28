import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LanguagePage } from "./LanguagePage";

export default {
  title: "Pages/LanguagePage",
  component: LanguagePage,
} as ComponentMeta<typeof LanguagePage>;

const Template: ComponentStory<typeof LanguagePage> = (args) => (
  <LanguagePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  language: {
    id: 0,
    title: "title",
    subTitle: "subTitle",
    description: "description",
  },
};
