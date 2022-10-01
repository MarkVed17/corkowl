import React from "react";
import "./Main.css";
import { Header } from "../Header/Header";
import { Overview, Sidebar } from "../../components";

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="col-10 overview-wrapper">
          <Overview />
        </div>
      </div>
    </div>
  );
};

export { Main };
