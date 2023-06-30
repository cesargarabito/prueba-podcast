import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [showLoader, setShowLoader] = useState(false);

  const toggleLoader = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 2000); 
  };

  useEffect(() => {
    setShowLoader(false); 
  }, []);
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }} onClick={toggleLoader}>
        <h1 style={{ color: "navy", textAlign: "left", marginBottom: "0" }}>
          Podcast
        </h1>
        {showLoader && <div className="loader" style={{ textAlign: 'end'}}>...</div>}
        <hr style={{ opacity: "0.5" }} />
        <br />
      </Link>
      
    </div>
  );
};

export default Header;
