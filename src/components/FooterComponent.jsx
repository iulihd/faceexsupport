import React from "react";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      &copy; {currentYear} Copyright: Surveillance International
    </div>
  );
}
