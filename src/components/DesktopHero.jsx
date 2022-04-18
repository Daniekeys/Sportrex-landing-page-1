import React, { useState, useEffect } from "react";
import desk1 from "../assets/desk/desk1.png";
import desk2 from "../assets/desk/desk2.png";
import desk3 from "../assets/desk/desk3.png";
import desk4 from "../assets/desk/desk4.png";
import desk5 from "../assets/desk/desk5.png";
import desk6 from "../assets/desk/desk6.png";
import desk7 from "../assets/desk/desk7.png";
import desk8 from "../assets/desk/desk8.png";
import desk9 from "../assets/desk/desk9.png";

import desk10 from "../assets/desk/desk10.png";
import desk11 from "../assets/desk/desk11.png";
import desk12 from "../assets/desk/desk12.png";
import logo from "../assets/primarylogo.png";
import bitcoin from "../assets/bitcoin.png";
import chaticon from "../assets/chaticon.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/inst.png";
import steam from "../assets/steam.png";
import heroicon from "../assets/iconn.png";
const imagesArray = [
  desk2,
  desk1,
  desk3,
  desk4,
  desk5,
  desk6,
  desk7,
  desk8,
  desk9,
  desk10,
  desk11,
  desk12,
];

const styles = {
  container:
    "w-full bg-lightBlue flex justify-center items-center transition-all ease-in-out mt-4 mb-12",
  contentContainer: "w-full",
  sectionContainer: "w-full h-full flex justify-between p-4",
  sectionA: "mt-44 w-1/2 flex flex-col space-y-6 px-4",
  title: "text-white biome-bold text-4xl  ",
  story: "text-white text-2xl biome-regular leading-9",
  btnContainer: "flex space-x-4",
  preBtn:
    "text-yellow border-yellow border-[1px] px-6 py-2 font-bold biome-regular  ",
  getBtn: "text-white font-bold bg-lightBlue px-4 py-2 biome-regular",
  sectionB: "w-5/12 h-full  flex flex-col justify-end ",
  iconContainer: "w-full md:w-full flex justify-end mb-8 ",
  icon: "w-12 h-full mr-4 ",
  footericon: "w-8/12 h-full",
};
const iconArray = [bitcoin, chaticon, facebook, instagram, steam];

const DesktopHero = () => {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(imagesArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === imagesArray.length - 1) {
        setIndex(0);
        setImage(imagesArray[index]);
      } else {
        setIndex(index + 1);
        setImage(imagesArray[index]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      className={styles.container}
      style={{
        background: "transparent ",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        //   objectFit: "cover",
        height: "40rem",
        width: "100%",
      }}
    >
      <div
        className={styles.contentContainer}
        style={{
          background: "rgba(1, 14, 40, 0.7)",
          height: "100%",
          width: "100%",
        }}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionA}>
            <h1 className={styles.title}>
              The Future Of Smart Gaming Begins With Sportrex
            </h1>
            <p className={styles.story}>
              Sportrex is a revolutionary e-sports and play-to-earn platform
              powered by blockchain technology. We are redefining the gaming &
              immersive entertainment experience.
            </p>
            <div className={styles.btnContainer}>
              <button className={styles.getBtn}>Get Airdrop</button>
              <button className={styles.preBtn}>Pre-Sale</button>
            </div>
          </div>
          {/* #########################SECTION A ENDING */}
          <div className={styles.sectionB}>
            <div className={styles.iconContainer}>
              <img src={heroicon} alt="ki" className={styles.footericon} />
            </div>
          </div>
          {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ SECTIONB ENDING */}
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;
