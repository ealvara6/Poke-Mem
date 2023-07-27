import React from 'react';
import icon from './assets/github-mark.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">&copy;2023</div>
      <div className="gitub-username">ealvara6</div>
      <button type="button">
        <a href="https://github.com/ealvara6" target="_blank" rel="noreferrer">
          <img src={icon} alt="github" />
        </a>
      </button>
    </footer>
  );
}

export default Footer;
