import './header.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="nav">
        <div className="left-part not-centered header-left">
          <Link to="/">
            <h3 className="website-title">Webino Blogs</h3>
          </Link>
        </div>
        <div className="right-part header-right">
          <ul>
            <li><Link to="/reports" className="nav-link"><h4>Reports</h4></Link></li>
            <li><Link to="/blogs" className="nav-link"><h4>Blogs</h4></Link></li>
            <li><Link to="/sports" className="nav-link"><h4>Sports</h4></Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`nav-mobile ${menuOpen ? "menuOpen" : ""}`}>
        <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>

          {/* Show hamburger icon only if menu is NOT open */}
          {!menuOpen && (
            <div className='menuBtn-container not-centered'>
              <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.125C0 3.36445 0.606473 2.75 1.35714 2.75H17.6429C18.3935 2.75 19 3.36445 19 4.125C19 4.88555 18.3935 5.5 17.6429 5.5H1.35714C0.606473 5.5 0 4.88555 0 4.125ZM0 11C0 10.2395 0.606473 9.625 1.35714 9.625H17.6429C18.3935 9.625 19 10.2395 19 11C19 11.7605 18.3935 12.375 17.6429 12.375H1.35714C0.606473 12.375 0 11.7605 0 11ZM19 17.875C19 18.6355 18.3935 19.25 17.6429 19.25H1.35714C0.606473 19.25 0 18.6355 0 17.875C0 17.1145 0.606473 16.5 1.35714 16.5H17.6429C18.3935 16.5 19 17.1145 19 17.875Z" fill="white" />
              </svg>
            </div>
          )}

          {/* Show X icon if menu IS open */}
          {menuOpen && (
            <div className='menuBtn-container not-centered'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L20 20M2 20L20 2" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          )}
        </button>

        {/* Title always visible */}
        <div className='title-container-mobile '>
          <Link to="/"><h3 className='title-mobile'>WB</h3></Link>
        </div>

        {/* The mobile dropdown menu */}
        {menuOpen && (
          <>
          <div className='menuBar'>
            <ul>
            <li><Link to="/reports" className="nav-link"><h4>Reports</h4></Link></li>
            <li><Link to="/blogs" className="nav-link"><h4>Blogs</h4></Link></li>
            <li><Link to="/sports" className="nav-link"><h4>Sports</h4></Link></li>
          </ul>
          </div>
          </>
        )}
      </div>
    </>
  );
}
