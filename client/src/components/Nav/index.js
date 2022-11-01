import React from "react";
// import { Link } from "react-router-dom";

// import auth from "../../utils/auth";

function Nav() {
  // const logout = (e) => {
  //   e.preventDefault();
  //   auth.logout();
  // };
  return (
    <nav>
      <ul className="navbar">
        <li className="navlink"><a href="../../">Home</a></li>
        <li className="navlink"><a href="../../Profile">Profile</a></li>
        <li className="navlink"><a href="../../Login">Login</a></li>
      </ul>
    </nav>
    // {/* {auth.loggedIn() ? (
    //   <>
    //     <Link to="/">Home</Link>
    //     <Link to="/profile"> Profile </Link>
    //     <Link to="/" onClick={logout}>
    //       {" "}
    //       Log out{" "}
    //     </Link>
    //   </>
    // ) : (
    //   <>
    //     <Link to="/">Home</Link>
    //     <Link to="/Login">Log in</Link>
    //   </>
    // )} */}
  );
}

export default Nav;
