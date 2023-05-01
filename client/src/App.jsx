import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState(true);

  return (
    <div className="app">
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        mode={mode}
        setMode={setMode}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro mode={mode} />
        <Portofolio mode={mode} />
        <Works mode={mode} />
        <Testimonials mode={mode} />
        <Contact mode={mode} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
