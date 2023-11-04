import React from 'react'

export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="#home" className="logo">Bookly</a>
            <ul className="footer-list">
              <li>
                <a href='#home' className="footer-link">Home</a>
              </li>
              <li>
                <a href="#benefits" className="footer-link">Benefits</a>
              </li>
              
              <li>
                <a href="#searchBooks" className="footer-link">Search Books</a>
              </li>
              <li>
                <a href="#Best-Seller" className="footer-link">Best Seller</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2023 All right reserved. Made with ❤ by lazyNerdz.
            </p>
          </div>
        </div>
      </footer>
    )
}
