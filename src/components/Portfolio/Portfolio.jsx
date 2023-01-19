import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="projects"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Projects</span>
            <p style={{marginTop: "10px"}}>Check out my <a style={{textDecoration:'none', fontWeight:'bold', color:'#A27B5C'}}href="https://github.com/andrewypark" target={"_blank"}>GitHub</a></p>
          </div>
          <span className="secondaryText"></span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://classroomtimer.net/" target={'_blank'}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" />
          </a>
          <a href="https://github.com/andrewypark/personal-portfolio-2">
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
          </a>
          <a href="">
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
