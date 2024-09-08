import React from 'react'
import "./header.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0jWPJ2dABPXDnURT5UrGTNzA5ONHfTO2qQ&s"
                alt="Netlix logo"
              />
            </li>
            {/* <li>Netflix</li> */}
            <li>Home</li>
            <li>TVshows</li>
            <li>Movies</li>
            <li>Latests</li>
            <li>MyLists</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header