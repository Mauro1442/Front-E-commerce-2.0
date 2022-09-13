import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign">Sign In</Link>
        </li>
        <li>
          <Link to="/log">Log In</Link>
        </li>
      </ul>
    </div>
  );
}
