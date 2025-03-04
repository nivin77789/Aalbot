import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";

function Action() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <div className="closeup">
        <h2>
        Engineering Intelligence,<span className="text-col">Empowering Innovation.</span>
        </h2>
      </div>
    
    </div>
  );
}

export default Action;
