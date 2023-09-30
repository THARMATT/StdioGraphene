import Image from "next/image";
import React from "react";
import ContactForm from "../components/ContactForm";
function Footer() {
  return (
    <>
      {" "}
      <div>
        <div className="footer">
          <div className="bg-image">
           <div className="flex"> <div className="left">
              {" "}
              <h3>Newslleter</h3>
              <p>Get news about articles and updates in your inbox.</p>
              <div className="bottom">
              <h1>GET IN TOUCH</h1>
            </div>
            </div>
            <div className="right">
              <ContactForm />
            </div></div>
            
          </div>
        </div>
      </div>
      <div className="footer-end">
        <span>Copyright 2023 All Right Reserved By Nigam Sharma</span>
      </div>
    </>
  );
}

export default Footer;
