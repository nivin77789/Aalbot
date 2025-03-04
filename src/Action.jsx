import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";

function Action() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);
  return (
      <div className="closeup">
        <h2>
          We Speak <span className="text-col">Fluent Algorithm</span>
        </h2>
      </div>
     
   
  );
}

export default Action;
