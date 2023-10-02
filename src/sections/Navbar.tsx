import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveVisible, setResponsiveVisible] = useState(false);


  const sectionLinks = [
    { name: 'Home', id: 'home', link:"#home"},
    { name: 'About', id: 'about' , link:"#product"},
    { name: 'Our Products', id: 'product', link:"#product" ,child: [
    { name: 'Jwellery', id: 'p1', link:"#product"},
    { name: 'Electronics', id: 'p2' , link:"#product"},
    { name: 'Manifold Elegance', id: 'p3', link:"#product"},
    { name: 'Femme Couture', id: 'p4' , link:"#product"},
    ] },
    { name: 'Contact Us', id: 'contact', link:"#footer"},
    ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false);
    });
  }, []);

  //for navbar functioning
  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      const nav = document.querySelector("nav-items");
      nav?.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      const html = document.querySelector("html");
      html?.addEventListener("click", (e) => {
        setResponsiveVisible(false);
      });
    });
  }, []);

  //blur
  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveVisible]);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <motion.div className="brand"
       
        >
          <Link href="#home">
          <Logo/>
          </Link>
        </motion.div>
        <motion.div className="nav-responsive-toggle"
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:0.3,
         ease:"easeInOut",}}>
          {responsiveVisible ? (
            <CgClose
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setResponsiveVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setResponsiveVisible(true);
              }}
            />
          )}
        </motion.div>
        <div className={`${responsiveVisible && "nav-responsive"} nav-items`}>
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link },index) => (
              <motion.li key={name} className="nav-items-list-item"
              initial={{opacity:0,y:-25}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.3,
              ease:"easeInOut",delay:0.3+index*0.1}}
              >
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
