import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div id="logo" className="navbar nb-comp">
        <span>omnibiteh</span>
      </div>
      <div id="social" className="navbar nb-comp">
        <div className="icon">
          <a href="https://facebook.com">
            <img
              className="icon"
              src="https://www.pngitem.com/pimgs/m/516-5169649_palm-tree-leaf-png-transparent-png.png"
              alt="Facebook_username"
            />
          </a>
        </div>
        <div className="icon">
          <a href="https://facebook.com">
            <img
              className="icon"
              src="https://www.pngitem.com/pimgs/m/516-5169649_palm-tree-leaf-png-transparent-png.png"
              alt="Facebook_username"
            />
          </a>
        </div>
        <div className="icon">
          <a href="https://facebook.com">
            <img
              className="icon"
              src="https://www.pngitem.com/pimgs/m/516-5169649_palm-tree-leaf-png-transparent-png.png"
              alt="Facebook_username"
            />
          </a>
        </div>
      </div>
      <div id="links" className="navbar nb-comp">
        <span>nosotros</span>
        <span>nosotros</span>
      </div>
    </div>
  );
}
