import Button from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Center from "../Center/Center";

export default {
    title: "Form/Button",
    component: Button,
    decorators: [story=><Center>{story()}</Center>]
} as ComponentMeta<typeof Button>

export const Fill = () => <Button variant="fill">Fill</Button>

export const Outline = () => <Button variant="outline">Outline</Button>

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />

export const FillA = Template.bind({});
FillA.args = {
    variant: "fill",
    children: "Fill args"
}

export const OutlineA = Template.bind({});
OutlineA.args = {
    variant: "outline",
    children: "Outline args"
}

export const Log = () => (
    <Button onClick={()=> console.log("clicked")}>Log</Button>
)