import React, { useState, useEffect } from "react";
import Link from "next/link";
// import Logo from "@/components/Logo";
// import Button from "@/components/Button";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveVisible, setResponsiveVisible] = useState(false);


  const sectionLinks = [
    { name: 'Home', id: 'home', link:"#home"},
    { name: 'About', id: 'about' , link:"#home"},
    { name: 'Our Products', id: 'product', link:"#home" ,child: [
    { name: 'Product 1', id: 'p1', link:"#home"},
    { name: 'Product 2', id: 'p2' , link:"#home"},
    { name: 'Product 3', id: 'p3', link:"#home"},
    { name: 'Product 4', id: 'p4' , link:"#home"},
    ] },
    { name: 'Contact Us', id: 'contact', link:"#home"},
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
          <Link href="">
          ShopKart
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
          {/* <motion.div className="nav-items-button"
           initial={{opacity:0,y:-25}}
           animate={{opacity:1,y:0}}
           transition={{duration:0.3,
           ease:"easeInOut",delay:0.6}}>
            <Button
              text="Resume"
              link="https://www.canva.com/design/DAFqYShe06I/QPRNgxnA-wBBlGFDkiEheg/view?utm_content=DAFqYShe06I&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            />
          </motion.div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
