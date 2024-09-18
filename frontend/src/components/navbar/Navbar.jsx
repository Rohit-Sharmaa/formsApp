import "./navbar.css";
import { FaWpforms } from "react-icons/fa";
import data from "./data.js";
import { Link, NavLink } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleTitleClick = () => {
    navigate("/");
  };

  const handleRefreshClick = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/excel/sync-excel"
      );
      console.log("Sync Response:", response.data);
      alert("Data synced successfully!");
    } catch (error) {
      console.error("Error syncing data:", error);
      alert("Failed to sync data.");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav_container">
        <div className="nav_logo_container">
          <FaWpforms className="nav_logo" />
          <h3 onClick={handleTitleClick} className="nav_title">
            Forms
          </h3>
        </div>
        {/* this is for option  */}

        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `nav_list_item ${isActive ? "active" : ""}`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="login_button">
          {/* <button className="btn light theme">
            <MdOutlineLightMode />
          </button> */}

          <button className="btn white sm" onClick={handleRefreshClick}>
            Refresh
          </button>
        </div>
        {/* Menu for smart phone*/}
        <div>
          <MdMenuOpen
            className="m_nav_icon"
            onClick={() => setToggle(!toggle)}
            fontSize={24}
          />
          <div
            onClick={() => setToggle(!toggle)}
            className={`${!toggle ? "m_nav_hidden " : "m_nav_menu"} `}
          >
            <ul className="m_nav_menu_ul">
              {data.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} className="m_nav_menu_ul_link">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="btn white sm m_nav_login"
                  onClick={handleRefreshClick}
                >
                  Refresh
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// excelsheet-436018

export default Navbar;
