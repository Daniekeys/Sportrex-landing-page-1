import React, { useState } from "react";

import rightface from "../assets/rightfacebg.png";
import movingCircle from "../assets/movingCircle.png";

const styles = {
  parentContainer:
    "w-full h-full relative  space-y-4 flex flex-col my-20 biome-regular",
  title: " text-white text-3xl biome-bold",
  container: "w-full flex      text-white ",
  imgContainer:"w-5/12",
  img:"w-full h-auto",
  story:"text-white biome-regular text-xl leading-9 ",
  storyContainer:"w-7/12 px-6 ",
  parker:"w-9/12 h-full flex flex-col leading-9 space-y-10 mt-8",
  buttonContainer: " w-full flex  items-center",
  preBtn:
    "text-yellow border-yellow border-[1px] px-6 py-2 mr-4 biome-regular ",
  getBtn: "text-white font-bold bg-lightBlue px-4 py-2 biome-regular ",
};

const SportrexVerse = () => {


  return (
    <div className={styles.parentContainer}>
      <div
        className={styles.container}
        style={{
          background: "transparent ",
          backgroundImage: `url(${rightface})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   objectFit: "cover",
          height: "33rem",
          width: "100%",
          zIndex: "100000",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <div className={styles.imgContainer}>
          <img src={movingCircle} className={styles.img} alt="sportrex" />
        </div>
        <div className={styles.storyContainer}>
            <div className={styles.parker}>
          <h1 className={styles.title}>
            With SportrexVERSE: You are one step ahead of the game
          </h1>
          <p className={styles.story}>
            SportrexVERSE is a virtual reality space where every user can
            create, socialize, trade, and network. Our immersive community
            serves as an extension to the universe and offers a complete sense
            of existence from entertainment to commerce.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.preBtn}>Pre-Sale</button>
            <button className={styles.getBtn}>Get Airdrop</button>
          </div>
          </div>
        </div>
      </div>
      <div className="blur-circle-purple" />
    </div>
  );
};

export default SportrexVerse;
