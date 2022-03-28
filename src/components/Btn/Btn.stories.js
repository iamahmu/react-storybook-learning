import React from "react";
import Btn from "./Btn";

export default {
  title: "Components/Btn",
  Component: Btn,
};

export const Primary = () => <Btn variant="primary">Primary</Btn>;

export const Secondary = () => <Btn variant="secondary">Secondary</Btn>;
