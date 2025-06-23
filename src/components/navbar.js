import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const menuRef = useRef(null);
  const [underlineProps, setUnderlineProps] = useState({
    left: 0,
    width: 0,
  });

  // Liste des routes et labels, ordre doit correspondre au menu
  const menuItems = [
    { label: "Accueil", path: "/" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    // Trouve l'index de l'item actif selon la route actuelle
    const activeIndex = menuItems.findIndex(
      (item) => item.path === location.pathname
    );
    const index = activeIndex === -1 ? 0 : activeIndex;

    const activeItem = menu.children[index];
    if (activeItem) {
      setUnderlineProps({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
      });
    }
  }, [location.pathname]); // relance à chaque changement de route

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <nav className="navbar">
        <ul className="menu" ref={menuRef}>
          {menuItems.map(({ label, path }, i) => (
            <motion.li
              key={path}
              className={location.pathname === path ? "active" : ""}
            >
              <Link to={path}>{label}</Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="underline"
          layout
          animate={{ left: underlineProps.left, width: underlineProps.width }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </nav>
    </motion.div>
  );
}

export default Navbar;
