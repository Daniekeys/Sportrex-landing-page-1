import React from "react";
import man from "../assets/man-game.png";


const styles = {
  container: "w-full h-full my-20 md:flex space-x-20 ",
  sectionA:" flex-grow-1 w-5/12 ",
  sectionContainer:"w-full flex flex-col justify-center ",
  aboutTitle: " text-white text-3xl mb-4 biome-bold",
  story:"text-white text-xl mb-2",
  sectionB:" w-6/12",
  img:"w-full h-auto",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionA}>
        <div className={styles.sectionContainer}>
          <h1 className={styles.aboutTitle}>About Sportrex</h1>
          <p className={styles.story}>
            Sportrex is your virtual doorway to a world of endless
            possibilities. Think for a second how amazing it is for gamers to
            finally be able to earn while playing their favorite games - from
            board games to video games. Simply remarkable.
          </p>
          <p className={styles.story}>
            This is exactly what Sportrex is, your one-stop shop for eSports,
            Social networking, and Gameplay.
          </p>
        </div>
      </div>
      <div className={styles.sectionB}>
          <img src={man} alt="sportrex" className={styles.img} />
      </div>
    </div>
  );
};

export default About;
