import React from 'react'
import {  Link } from 'react-router-dom'


const NavItems = () => {
    const NavLinks = [
        { name: "Home", Path: "/" },
        { name: "Services", Path: "/ser" },
        { name: "Skills", Path: "/skil"   },
        { name: "Contact", Path: "/cont"},
     ];

  return (
    <nav className="md:ml-auto md:mr-auto items-center text-base justify-center hidden sm:block">
      <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
        {NavLinks.map((links, index) => (
          <li
            key={index}
            className="mr-10 hover:text-blue-500 flex items-center space-x-10"
          >
            <Link to={links.Path} className="flex items-center">
              <span className="ml-2">{links.name}</span>{" "}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavItems