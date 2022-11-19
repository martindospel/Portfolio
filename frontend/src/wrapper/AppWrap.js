import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`container ${classNames}`}>
        <SocialMedia />
        <div className="wrapper flex">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;