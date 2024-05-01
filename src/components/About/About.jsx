import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
       
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>FullStack Developer</h3>
              <br/>
              <p>
                Experienced professional with
                one year in full-stack
                development, demonstrating
                proficiency in project
                completion. Skilled in
                decision-making,
                collaboration, and contributing
                to organizational success.
                Background includes
                managing programs and
                directing business operations
                effectively. Additionally,
                experienced in working with AI
                technologies, including
                machine learning algorithms
                and natural language
                processing, to enhance project
                efficiency and effectiveness.
                Well-versed in UI/UX design
                principles, ensuring intuitive
                and user-friendly interfaces
                that optimize end-user
                experience and engagement
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
        <img
          src={getImageUrl("about/dev.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
      </div>
    </section>
  );
};
