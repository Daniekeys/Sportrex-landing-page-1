import React from 'react'
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';

const styles = {
  container: "w-full h-full my-8 biome-regular mb-40 ",
  title: "self-center text-grey text-2xl mb-6 text-center",
  imgContainer: "w-full flex flex-col overflow-x-hidden space-y-6 ",
  img: "w-full h-auto -ml-[600px] ",
  img2: "w-full h-auto ml-[600px] ",
};


const Partners = ()=> {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Our Partners</h1>
        <div className={styles.imgContainer}>
          <img src={slide1} alt="sportrex partners" className={styles.img} />
          <img src={slide2} alt="sportrex partners" className={styles.img2} />
        </div>
      </div>
    );
}

export default Partners
