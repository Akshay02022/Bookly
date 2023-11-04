import React from 'react'

function Navbar() {
  return (
    
  <header className="header" data-header>
    <div className="container">
      <a href="#home"className="logo">Bookly</a>
      <nav className="navbar" data-navbar>
        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#home" className="navbar-link" data-nav-link>Home</a>
          </li>

          <li className="navbar-item">
            <a href="#searchBooks" className="navbar-link" data-nav-link>Search Books</a>
          </li>

          <li className="navbar-item">
            <a href="#benefits" className="navbar-link" data-nav-link>Benefits</a>
          </li>

          <li className="navbar-item">
            <a href="#Best-Seller" className="navbar-link" data-nav-link>Best Seller</a>
          </li>

        </ul>
      </nav>

      <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true" className="open">A</ion-icon>

        <ion-icon name="close-outline" aria-hidden="true" className="close">B</ion-icon>
      </button>

    </div>
  </header>
  )
}

export default Navbar