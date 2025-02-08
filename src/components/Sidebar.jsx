import '../styles/Sidebar.css';
const Sidebar = () => {
  return (
    <>
      <aside className="aside">
        <a href="#home" className="nav__logo">
        </a>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#Home" className="nav__link">
                  <i className="icon-home"></i> 
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i> 
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation"></i> 
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="icon-layers"></i> 
                </a>
              </li>
              <li className="nav__item">
                <a href="#blog" className="nav__link">
                  <i className="icon-note"></i> 
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubbles"></i> 
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="nav__footer">
          <span className="copyright">
            2025
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
