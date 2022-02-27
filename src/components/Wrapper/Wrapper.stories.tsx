import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import Wrapper, { Props } from "./Wrapper";

export default {
  title: "Basic/Wrapper",
  component: Wrapper,
  argTypes: { numberOfChildren: { type: "number" } },
} as ComponentMeta<typeof Wrapper>;

const Template: Story<Props & { numberOfChildren: number }> = ({
  numberOfChildren = 4,
  ...args
}: Props & { numberOfChildren: number }) => (
  <Wrapper {...args}>
    {[...Array(numberOfChildren)].map((_, i) => (
      <div
        key={i}
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: "red",
          margin: "2px",
        }}
      >
        {i + 1}
      </div>
    ))}
  </Wrapper>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  wrap: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  wrap: true,
};

export const ManyChildren = Template.bind({});
ManyChildren.args = {
  direction: "row",
  wrap: true,
  numberOfChildren: 20,
};

export const NoWrap = Template.bind({});
NoWrap.args = {
  direction: "row",
  wrap: false,
  numberOfChildren: 20,
};
