import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ primary, size, backgroundColor, label, ...props }: import("../Button/Button").ButtonProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: "color";
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
