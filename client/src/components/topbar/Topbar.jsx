import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function topbar({ menuOpen, setMenuOpen, mode, setMode }) {
  return (
    <div
      className={
        "topbar " +
        (menuOpen && "active") +
        (mode === true ? " lightMode" : " darkMode")
      }
    >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+33 06 55 55 55 55</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>fabrizio.dimarco@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="darkModeIcon" id="darkMode">
            {mode ? (
              <LightModeIcon className="icon" onClick={() => setMode(!mode)} />
            ) : (
              <DarkModeIcon className="icon" onClick={() => setMode(!mode)} />
            )}
          </div>
          <div
            className={
              "hamburger" + (mode === true ? " lightMode" : " darkMode")
            }
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
