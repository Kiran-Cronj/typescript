import React, { FC } from "react";
import SideBar from "./SideBar/SideBar";
import Customer from "./Customer/Customer";
import Add from "./Add";

interface TitleProps {
  title: string;
  subtitle?: string;
}

const Dashboard: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Customer name="new" />
      
    </>
  );
};

export default Dashboard;
