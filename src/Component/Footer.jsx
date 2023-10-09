import React from 'react';
import "./All.css";
const Footer = () => {
  return (
    <footer>
    <div className="footer-bottom--section">
    <hr />
    <div className="copyRightSection">
        <p>
            @{new Date().getFullYear()} Video clone 
        </p>
        <p>Created by Mohammad Darain</p>
        <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
        </div>
    </div>
</div>
    </footer>
  )
}

export default Footer