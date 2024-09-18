import React from "react";
import "./header.css";

import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="top_container">
      <div className="header_container">
        <div className="wrapper">
          <h1 className="tagline_container">
            <span className="tagline_heading"> Form Submission Portal</span>
            &nbsp; <span className="tagline_inner">made Simple</span>
          </h1>
          <h3 className="base_line_container">
            <span className="base_line_upper">
              <span className="base_line_name">Simplify</span> form handling
              with real-time updates and integration.
            </span>

            <span className="base_line_lower">
              Effortlessly manage forms with real-time data synchronization.
            </span>
          </h3>
        </div>
      </div>

      <div className="cta_button">
        <Link to="/formA">
          <button className="btn primary sm ">Form A</button>
        </Link>
        <Link to="/formB">
          <button className="btn light sm">Form B</button>
        </Link>
      </div>
    </div>
  );
}
