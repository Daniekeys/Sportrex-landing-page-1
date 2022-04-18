import React,{useState} from 'react'
import Tokenmetrics from './Tokenmetrics'
import SPT from './SPT'
import MultiChain from './MultiChain'
import leftface from '../../assets/leftface.png'

const styles = {
  parentContainer:
    "w-full h-full relative  space-y-4 flex flex-col my-20 biome-regular",
  title: "text-center text-grey text-3xl biome-bold",
  container:
    "w-full   shadow-md   text-white ",
  tabsContainer: "w-full border-b-2 border-grey flex  ",
  activeTab: "bg-lightBlue text-white py-6 text-2xl",
  inactiveTab: " text-white py-6 text-2xl",
  tab: "w-1/3 text-center p-2",
  tabContent: "w-full h-full",
};

const Tokennomics = () => {
    const [selected, setSelected] = useState('Tokenmetrics')
  
  return (
    <div className={styles.parentContainer}>
      <h1 className={styles.title}>Tokenomics</h1>
      <div className="blur-circle" />
      <div
        className={styles.container}
        style={{
          background: "transparent ",
          backgroundImage: `url(${leftface})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   objectFit: "cover",
          height: "37rem",
          width: "100%",
          zIndex:"100000",
          overflowX:"hidden",
          overflowY:"hidden"
        }}
      >
        <div className={styles.tabsContainer}>
          <div
            className={`${styles.tab} ${
              selected === "SPT" ? styles.activeTab : styles.inactiveTab
            }`}
            onClick={() => setSelected("SPT")}
          >
            Sportrex Token (SPT)
          </div>
          <div
            className={`${styles.tab} ${
              selected === "MultiChain" ? styles.activeTab : styles.inactiveTab
            }`}
            onClick={() => setSelected("MultiChain")}
          >
            Multi-Chain Network
          </div>
          <div
            className={`${styles.tab} ${
              selected === "Tokenmetrics"
                ? styles.activeTab
                : styles.inactiveTab
            }`}
            onClick={() => setSelected("Tokenmetrics")}
          >
            Tokenmetrics
          </div>
        </div>
        <div className={styles.tabContent}>
          {selected === "SPT" && <SPT />}
          {selected === "Tokenmetrics" && <Tokenmetrics />}
          {selected === "MultiChain" && <MultiChain />}

          {/* {selected} */}
        </div>
      </div>
      <div className="blur-circle-purple" />
      <div className="blur-circle-purple-r" />
    </div>
  );
}

export default Tokennomics