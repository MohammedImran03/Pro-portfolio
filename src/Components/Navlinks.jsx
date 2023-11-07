import React from "react";
import { Link } from "react-scroll";

const NavLinks = ({ link, className, onClick, icon }) => {
  return (
    <li className={className}>
      <Link to={link} smooth duration={700} onClick={onClick}>
        <div className="" style={{display:"flex", justifyContent:"center",alignItems:"center"}}><span className="pr-1">{icon}</span>{link}</div>
      </Link>
    </li>
  );
};

export default NavLinks;