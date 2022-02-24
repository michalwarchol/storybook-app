import Input from "./Input";
import {ComponentMeta} from "@storybook/react";

export default {
    title: "Form/Input",
    component: Input
} as ComponentMeta<typeof Input>


export const Small = () => <Input s="small" placeholder="small input"/>;
export const Medium = () => <Input placeholder="medium input" />;
export const Large = () => <Input s="large" placeholder="large input" />;