import { Link } from "react-router-dom";
import "../pages/Home.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        <Link to="/cgu" className="link-cgu link">
          {" "}
          CGU{" "}
        </Link>
      </p>
    </div>
  );
}

export default Footer;
