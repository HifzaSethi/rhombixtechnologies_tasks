import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUser,
  faCode,
  faBriefcase,
  faEnvelope,
  faBars,
  faXmark,
  faTrophy,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1 px-3 py-2 rounded-md transition 
     ${
       isActive
         ? "text-blue-400 bg-gray-800"
         : "text-gray-200 hover:text-blue-400 hover:bg-gray-800"
     }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          Hifza<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center space-x-2 text-sm font-medium">
          <NavLink to="/" className={linkClass}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            <FontAwesomeIcon icon={faUser} /> About
          </NavLink>
          <NavLink to="/education" className={linkClass}>
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </NavLink>
          <NavLink to="/achievements" className={linkClass}>
            <FontAwesomeIcon icon={faTrophy} /> Achievements
          </NavLink>
          <NavLink to="/skills" className={linkClass}>
            <FontAwesomeIcon icon={faCode} /> Skills
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            <FontAwesomeIcon icon={faBriefcase} /> Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 text-xl"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-2">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={linkClass}
          >
            {" "}
            <FontAwesomeIcon icon={faUser} />
            About
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/education"
            className={linkClass}
          >
            {" "}
            <FontAwesomeIcon icon={faGraduationCap} />
            Education
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/achievements"
            className={linkClass}
          >
            {" "}
            <FontAwesomeIcon icon={faTrophy} />
            Achievemnets
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/skills"
            className={linkClass}
          >
            {" "}
            <FontAwesomeIcon icon={faCode} />
            Skills
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/projects"
            className={linkClass}
          >
            {" "}
            <FontAwesomeIcon icon={faBriefcase} />
            Projects
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/contact"
            className={linkClass}
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
