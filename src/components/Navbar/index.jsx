import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <section className={styles.navbar}>
      <section className={styles.linksContainer}>
        {[
          { title: "INDONESIA", path: "/" },
          { title: "PROGRAMMING", path: "/programming" },
          { title: "COVID-19", path: "/covid-19" },
          { title: "SAVED", path: "/saved" },
        ].map((link) => (
          <NavLink
            key={link.title}
            to={link.path}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            {link.title}
          </NavLink>
        ))}
      </section>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search news..."
          className={styles.searchBar}
        />
        <button onClick={handleSearch} className={styles.searchBarBtn}>
          Search
        </button>
      </div>
    </section>
  );
}

export { Navbar };

