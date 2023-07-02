import { Link } from "react-router-dom";
import React from "react";


const Header = () => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 style={{ color: "navy", textAlign: "left", marginBottom: "0" }}>
          Podcast
        </h1>

        <hr style={{ opacity: "0.5" }} />
        <br />
      </Link>
    </div>
  );
};

export default Header;
