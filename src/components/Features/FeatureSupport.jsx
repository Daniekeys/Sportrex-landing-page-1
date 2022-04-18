import React, { useState } from "react";
import others from "../../assets/otherSupport.png";
import gamingConsole from "../../assets/platformSupported.png";

const styles = {
  parentContainer:
    "w-full h-full  flex-col px-4 pt-4 biome-regular space-y-4 bg-white",
  btnContainer: "w-full flex justify-center space-x-4 items-center ",
  activeBtn: "text-white bg-lightBlue px-6 py-2",
  nonActive: "text-grey border-2 border-grey px-6 py-2",
  imgContainer: "w-full h-full ",
  img: "w-10/12 h-auto mx-auto",
  textParent: "flex w-full h-full flex-col space-y-4 px-4",
  textContainer: "flex border-b-2 pb-2 border-grey leading-9 font-bold ",
  textName: "text-lightBlue text-lg biome-regular",
  story: "biome-regular text-lg text-black ",
};

const FeatureSupport = () => {
  const [eSport, setEsport] = useState(true);
  return (
    <div className={styles.parentContainer}>
      <div className={styles.btnContainer}>
        <button
          className={`${eSport ? styles.activeBtn : styles.nonActive}`}
          onClick={() => setEsport(true)}
        >
          Gaming Console
        </button>
        <button
          className={`${eSport ? styles.nonActive : styles.activeBtn}`}
          onClick={() => setEsport(false)}
        >
          Other
        </button>
      </div>
      <div className={styles.imgContainer}>
        {eSport ? (
          <img src={gamingConsole} className={styles.img} alt="sportrex games" />
        ) : (
          <img src={others} className={styles.img} alt="sportrex games" />
        )}
      </div>
    </div>
  );
};

export default FeatureSupport;
