import React from "react";
import logo from "../assets/primarylogo.png";
import bitcoin from "../assets/bitcoin.png";
import chaticon from "../assets/chaticon.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/inst.png";
import steam from "../assets/steam.png";
import footericon from "../assets/footericon.png";

const styles = {
  parentContainer: "w-full mt-8 biome-regular ",
  container: "w-full h-full flex flex-col px-4 md:px-0",
  sectionA:
    " w-full flex flex-col md:flex-row md:justify-between md:items-start mb-4  space-x-2 md:space-x-8",
  partA: "w-full md:w-3/12 mb-4 md:mb-0 md:flex md:items-start",
  partAContainer: "w-full md:w-full flex flex-col items-start md:justify-start",
  logo: "w-9/12 h-auto",
  partAText: "text-grey text-xl biome-regular",
  partB:
    "w-full md:w-4/12 md:px-4 flex justify-between items-start mb-4 md:mb-0",
  partB1: "w-full md:w-full  flex flex-col justify-center items-start",
  column: "w-full md:w-full flex flex-col items-start ",
  title: "text-white text-xl font-bold mb-2  md:mb-4",
  colItem: "text-grey text-base mb-2 biome-regular  md:mb-4",
  partC:
    "w-full md:w-2/12 flex flex-col justify-center items-start mb-4 md:mb-0 ",
  partD: "w-full md:w-3/12 mb-4 md:mb-0",
  partD1: "w-full md:w-full flex md:justify-end mb-4 ",
  iconContainer: "w-full md:w-full flex ",

  icon: "w-full h-full",
  breaking: "bg-grey h-[1px] w-full",
  sectionB: "w-full flex justify-center items-center h-16",
  footnote: "text-grey text-lg biome-regular",
};

const Footer = () => {
  // write a fuction that gets the current year and returns it
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  const arrayA = ["Home", "About", "Features", "Partners", "Whitepaper", "API"];
  const arrayB = ["Home", "About", "Features"];
  const arrayC = [
    "Privacy Policy",
    "Acceptable Use Policy",
    "Notice Policy",
    "Terms of Service",
  ];
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.sectionA}>
          <div className={styles.partA}>
            <div className={styles.partAContainer}>
              <img src={logo} alt="logo" className={styles.logo} />
              <p className={styles.partAText}>
                The Largest Decentralized eSport & Betting Platform
              </p>
            </div>
          </div>
          <div className={styles.partB}>
            <div className={styles.partB1}>
              <p className={styles.title}>Navigation</p>
              <div className={styles.column}>
                {arrayA.map((item, index) => {
                  return (
                    <p className={styles.colItem} key={index}>
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className={styles.partB1}>
              <p className={styles.title}>Media</p>
              <div className={styles.column}>
                {arrayB.map((item, index) => {
                  return (
                    <p className={styles.colItem} key={index}>
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.partC}>
            <p className={styles.title}>Legal</p>
            <div className={styles.column}>
              {arrayC.map((item, index) => {
                return (
                  <p className={styles.colItem} key={index}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className={styles.partD}>
            <div className={styles.partD1}>
              <img src={footericon} alt="footericon" className={styles.icon} />
            </div>
           
          </div>
        </div>
        <div className={styles.breaking} />
        <div className={styles.sectionB}>
          <p className={styles.footnote}>© {getYear()} Sportrex Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
