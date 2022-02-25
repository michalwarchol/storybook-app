import { ComponentStory } from "@storybook/react";
import React from "react";
import { userEvent } from '@storybook/testing-library';
import { Fill } from "../Button/Button.stories";
import { Medium } from "../Input/Input.stories";
import { within } from "@testing-library/react";

export default {
    title: "Form/NewsLetter"
};

export const PrimaryNewsLetter = () => (
    <>
        <Medium />
        <Fill />
    </>
);

const Template: ComponentStory<React.FC> = () => (
<>
    <Medium />
    <Fill />
</>);

export const FilledForm = Template.bind({});

FilledForm.play = async ({_, canvasElement}) => {
    const canvas = within(canvasElement)
    const emailInput = await canvas.findByTestId("emailInput");
    await userEvent.type(emailInput, "mymail@email.com", {
        delay: 100
    });
    const button = canvas.getByRole('button')
    userEvent.click(button);
}