import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputInputProps, TextInputRootProps } from "../components/TextInput";
import { Envelope } from "phosphor-react";

export default {
    title: "components/TextInput",
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope/>       
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your e-mail address'/>
        ],
    },
    argTypes: {
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {};

export const WithouIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your e-mail address'/>
    },
};