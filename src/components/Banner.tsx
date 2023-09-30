import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTruck } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram, FiYoutube, FiLinkedin, FiTwitter } from "react-icons/fi";
function banner() {
  const bannerLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://youtube.com/@nigam_sharma",
    },
   
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/nigam-sharma",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/nigamsharma_",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "",
    },
  ];

  return (
    <div className="bg-top">
      <div className="left">
        <ul>
          <li>
            <FaTruck />{" "}
          </li>
          <li>Free Delivery</li>
          <li>|</li>
          <li>Return Policy</li>
        </ul>
      </div>
      <div className="right">
       
        <ul className="bannerlinks">
       <Link href=""> <li>Login</li></Link>
       <Link href=""> <li>Follow Us</li></Link>
          {bannerLinks.map(({ name, icon, link }) => (
            <li key={name} title={name} className="footer-icons-list-item">
              <Link
                href={link}
                className="bannerlinks-icon"
                id="footerlink"
                target="_blank"
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default banner;
