import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 Your Name | All Rights Reserved</p>
        <p>
          Contact:{" "}
          <a href="mailto:youremail@example.com">youremail@example.com</a> | 
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer"> GitHub</a> | 
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer"> LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
