import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left} id='footer'>
          <span className="primaryText">
            Want to hire me?<br />
            
          </span>
          <span className="primaryText">
            Start by <a href="mailto:therealandrewpark@gmail.com">saying hi.</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Site Map</span>
            <p></p>
          </div>
          <ul className={css.menu}>
            <li><a href="#">Back to Top</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Experience">Experience</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
