import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar nb-comp" style={{order:1}}>
        <span>nosotros</span>
        <span>nosotros</span>
      </div>
      <div className="navbar nb-comp" style={{order:2}}>
        <span>omnibiteh</span>
      </div>
      <div className="navbar nb-comp" style={{order:3}}>
        <div className="nb-icon">
          <p>o</p>
        </div>
        <div className="nb-icon">
          <p>o</p>
        </div>
        <div className="nb-icon">
          <p>o</p>
        </div>
      </div>
    </div>
  );
}
