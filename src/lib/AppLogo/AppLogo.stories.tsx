import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import AppLogo from "./AppLogo";
import { MainLogoIcon } from "../icons/logo";
import "../../index.css";

const meta: ComponentMeta<typeof AppLogo> = {
  title: "Design AVN-UI/AppLogo",
  component: AppLogo,
};
export default meta;

export const Default: ComponentStoryObj<typeof AppLogo> = {};

export const SuccessVariant: ComponentStoryObj<typeof AppLogo> = {
  args: {
    logo_path: "https://workplace.avn.kg/mobile-logo.png",
  },
};

export const ChildElem: ComponentStoryObj<typeof AppLogo> = {
  args: {
    app_logo: <MainLogoIcon />,
    //   <img src={"https://workplace.avn.kg/mobile-logo.png"} alt="" />
  },
};
