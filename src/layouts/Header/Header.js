import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <img src="/assets/logo.svg" alt="CORKOWL" />
        </div>
        <div className="col-6">
          <input
            type="text"
            placeholder="Search wines, customers here..."
            className="search-box"
          />
        </div>
        <div className="col-4 avatar-group">
          <span className="notifications">
            <img src="/assets/bell.svg" alt="bell" />
          </span>
          <div className="avatar-wrapper">
            <span className="username">Nicholas D.</span>
            <img src="/assets/avatar.svg" alt="avatar" />
            <img src="/assets/arrow_down.svg" alt="arrow_down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
