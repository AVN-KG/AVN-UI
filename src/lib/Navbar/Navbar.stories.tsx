import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { MainLogoIcon } from "../icons/logo";
import "../../index.css";

const meta: ComponentMeta<typeof Navbar> = {
  title: "Design AVN-UI/Navbar",
  component: Navbar,
};
export default meta;

// export const Default: ComponentStoryObj<typeof Navbar> = {};

// export const SuccessVariant: ComponentStoryObj<typeof Navbar> = {
//   args: {
//     logo_path: "https://workplace.avn.kg/mobile-logo.png",
//   },
// };

// export const ChildElem: ComponentStoryObj<typeof Navbar> = {
//   args: {
//     app_logo: <MainLogoIcon />,
//     //   <img src={"https://workplace.avn.kg/mobile-logo.png"} alt="" />
//   },
// };
