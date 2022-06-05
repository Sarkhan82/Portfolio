import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/aboutMe">A propos de moi</Link>
        </li>
        <li>
          <Link href="/projects">Projets</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
