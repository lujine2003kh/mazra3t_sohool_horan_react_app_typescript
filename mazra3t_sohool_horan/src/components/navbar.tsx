import "../style/navbar.css";
import logo from "../media/logo4.png";
import { useEffect, useRef, useState , useContext } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <>
      <nav className={`${isNavbarVisible ? "visible" : ""}`}>
        <img src={logo} />
        <div className="nav-items">
          <Link to="/home">Home</Link>
          <Link  to="/gallery">Gallery</Link>
          <Link to="/prices">Prices</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/signup" className="signup">Sign Up</Link>
          <Link to="/login" className="login">Log In</Link>
        </div>
      </nav>
    </>
  );
};