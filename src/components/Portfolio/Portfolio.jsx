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
            <motion.div variants={fadeIn("up", "tween", .6, .6)}>
              <h2>Classroom Timer</h2>
              <p>React.js</p>
            </motion.div>
          </a>
          <a href="https://www.andrewypark.com/" target={'_blank'}>
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
            <motion.div variants={fadeIn("up", "tween", .8, .6)}>
              <h2>Portfolio Website</h2>
              <p>React.js|Vite.js|Sass</p>
            </motion.div>
          </a>
          <a href="https://netflix-clone-4cdb5.web.app" target={'_blank'}>
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
            <motion.div variants={fadeIn("up", "tween", 1, .6)}>
              <h2>Netflix Clone</h2>
              <p>React.js|Redux|🔥Firebase|Stripe.api</p>
            </motion.div>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
