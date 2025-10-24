import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-main-container">
          <div className="footer-container left">
            <a href="products">Products</a>
            <a href="">Exchange</a>
            <a href="">Exclusive</a>
            <a href="">Up coming</a>
          </div>

          <div className="footer-container center">
            <a href="">FAQs</a>
            <a href="">Terms</a>
            <a href="">Policy</a>
            <a href="">Store</a>
          </div>

          <div className="footer-container">
            <a href="">Help Centre</a>
            <a href="">Account</a>
            <a href="">Corporation Information</a>
            <a href="">Investors</a>
          </div>
        </div>
        <div className="social-links">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="copy-rights">
          <p>
            &copy;Elite shopping Designed and developed by joel. All rights are
            reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
