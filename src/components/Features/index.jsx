import React, { useState }from 'react'
import FeatureGame from './FeatureGame'
import FeatureSupport from './FeatureSupport'
import FeatureLeague from './FeaturedLeague'
import InfluencerProgram from './InfluencerProgram'
const styles = {
  parentContainer: "w-full h-full my-20 relative",
  container: "w-full h-full flex   ",
  sectionA: " bg-white w-7/12 h-full overflow-y-scroll flow-hide ",
  sectionB: " w-5/12 h-full flex items-end ",
  tabsContainer: "w-full   flex flex-col  ",
  activeTab: "bg-lightBlue px-10 text-white py-8 text-2xl",
  inactiveTab: " text-white py-8 px-10 text-2xl",
  img: "w-full h-auto element-index",
  tab:"w-full"
};

const Feature = () => {
     const [selected, setSelected] = useState("FG");
  return (
    <div className={styles.parentContainer}>
      <div className="blur-circle bg-index" />
      <div
        className={styles.container}
        style={{ zIndex: "100000", height: "31rem" }}
      >
        <div className={styles.sectionA}>
            {selected === "FG" && <FeatureGame />}
            {selected === "FL" && <FeatureLeague />}
            {selected === "PS" && <FeatureSupport />}
            {selected === "IP" && <InfluencerProgram />}
        </div>
        <div className={styles.sectionB}>
          <div className={styles.tabsContainer}>
            <div
              className={`${styles.tab} ${
                selected === "FG" ? styles.activeTab : styles.inactiveTab
              }`}
              onClick={() => setSelected("FG")}
            >
              Featured Games
            </div>
            <div
              className={`${styles.tab} ${
                selected === "FL" ? styles.activeTab : styles.inactiveTab
              }`}
              onClick={() => setSelected("FL")}
            >
              Featured Leagues
            </div>
            <div
              className={`${styles.tab} ${
                selected === "PS" ? styles.activeTab : styles.inactiveTab
              }`}
              onClick={() => setSelected("PS")}
            >
              Platforms Supported
            </div>
            <div
              className={`${styles.tab} ${
                selected === "IP" ? styles.activeTab : styles.inactiveTab
              }`}
              onClick={() => setSelected("IP")}
            >
              Influencer Program
            </div>
          </div>
        </div>
      </div>
      <div className="blur-circle-purple-r" />
    </div>
  );
}

export default Feature