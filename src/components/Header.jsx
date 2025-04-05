import React, { useEffect, useState } from "react";

const Header = () => {
  const [status, setStatus] = useState("Login");
  console.log("Header Rendering");
  const handleStatus = (e) => {
    setStatus((prev) => {
      return prev === "Login" ? "Logout" : "Login";
    });
  };
  useEffect(() => {
    console.log("useEffect called");
  }, [status]);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          alt=""
        />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button onClick={handleStatus}>{status}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
