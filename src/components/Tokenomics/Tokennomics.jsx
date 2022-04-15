import React,{useState} from 'react'
import Tokenmetrics from './Tokenmetrics'
import SPT from './SPT'
import MultiChain from './MultiChain'

const styles = {
    parentContainer:"w-full h-full space-y-4 flex flex-col my-20",
    title:"text-center text-grey text-3xl biome-bold",
  container: "w-full h-80 bg-blue bg-special shadow-lg   text-white border-2 border-grey",
  tabsContainer:"w-full border-b-4 border-grey flex  ",
    activeTab:"bg-lightBlue text-white py-8 text-2xl",
    inactiveTab:" text-white py-8 text-2xl",
    tab:"w-1/3 text-center p-2",
    tabContent:"w-full h-full",
};

const Tokennomics = () => {
    const [selected, setSelected] = useState('Tokenmetrics')
    // switch(selected){
    //     case 'Tokenmetrics':
    //         return <Tokenmetrics />
    //     case 'SPT':
    //         return <SPT />
    //     case 'MultiChain':
    //         return <MultiChain />
    //     default:
    //         return <Tokenmetrics />
    // }

  return (
    <div className={styles.parentContainer}>
        <h1 className={styles.title}>
            Tokenomics
        </h1>
    <div className={styles.container}>
        <div className={styles.tabsContainer}>
            <div className={`${styles.tab} ${selected === 'SPT' ? styles.activeTab : styles.inactiveTab}`} onClick={() => setSelected('SPT')}>SPT</div>
            <div className={`${styles.tab} ${selected === 'MultiChain' ? styles.activeTab : styles.inactiveTab}`} onClick={() => setSelected('MultiChain')}>MultiChain</div>
            <div className={`${styles.tab} ${selected === 'Tokenmetrics' ? styles.activeTab : styles.inactiveTab}`} onClick={() => setSelected('Tokenmetrics')}>Tokenmetrics</div>
        </div>
        <div className={styles.tabContent}>
        {
            selected === "SPT" && <SPT />
        }
        {selected === "Tokenmetrics" && <Tokenmetrics />}
        {selected === "MultiChain" && <MultiChain />}
            
            {/* {selected} */}
        </div>
    </div>
    </div>

  )
}

export default Tokennomics