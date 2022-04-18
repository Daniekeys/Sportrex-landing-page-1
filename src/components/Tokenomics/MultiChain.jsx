import React from 'react'
import circle from "../../assets/movingCircle.png";

// The sportrex native token, SPT, is minted on multi-chain networks. These includes:
const styles = {
  container: "w-full flex justify-between space-x-8 p-10 mt-4 ",
  textContainer: "w-7/12 space-y-12 flex flex-col",
  spliterContainer:"w-full flex space-x-6",
  partA:"w-7/12 flex flex-col space-y-8",
  partB:"w-5/12 flex flex-col space-y-8",
  name: "text-white text-2xl biome-regular",
  value: "text-yellow  text-2xl biome-regular",
  imageContainer: "w-5/12 h-full",
  img: "w-full h-auto",
};
const side1 = [
  "Etherium Network(ERC20)",
  "Binace Chain (BEP20)",
  "Enjin Blockchain",
  "TRON Blockchain",
  

]
const side2 = [
  "Polkadot Network",
  "Carano Network",
  "Polygon Network-MATIC",
  "Tecra Blockchain",
  

]
const MultiChain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.name}>
          The sportrex native token, SPT, is minted on multi-chain networks.
          These includes:
        </p>
        <div className={styles.spliterContainer}>
          <div className={styles.partA}>
            {side1.map((item, index) => {
              return (
                <p key={index} className={styles.value}>
                  {item}
                </p>
              );
            })}
          </div>
          <div className={styles.partB}>
            {side2.map((item, index) => {
              return (
                <p key={index} className={styles.value}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={circle} alt="piechart" className={styles.img} />
      </div>
    </div>
  );
}

export default MultiChain