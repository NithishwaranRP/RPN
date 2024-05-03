import React from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Program } from "./components/Program/Program";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Design } from "./components/Design/Design";
import { getImageUrl } from "./utils";

function App() {
  const handleRedirect = () => {
    // Navigate to the specified URL when the download button is clicked
    window.location.href =
      "https://drive.usercontent.google.com/download?id=1dbMu67o9knB9Z4gSo5L8FaUlJGYc8Uz2&export=download&authuser=0&confirm=t&uuid=6e7f7cdc-977a-462f-86c9-3667d70b70d2&at=APZUnTVrd-Z1iYe2CMiFXwxHcp60%3A1714710959807";
  };

  return (
    <div className={styles.App}>
      <div>
        {/* Use onClick to trigger the redirection function */}
        <a href="#" onClick={handleRedirect}>
          {/* Display an image as a download link */}
          <img
            src={getImageUrl("about/app.png")}
            alt="Download APK"
            className={styles.downloadImage}
          />
        </a>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Program />
      <Design />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
