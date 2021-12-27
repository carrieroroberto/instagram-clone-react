import "./HeaderBar.css";

function HeaderBar() {
  return (
    <div className="header_bar">
      <img
        className="header_bar_logo"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="logo"
      />
      <div className="header_bar_buttons">
        <button>Accedi</button>
        <button>Registrati</button>
      </div>
    </div>
  );
}

export default HeaderBar;
