import React from 'react'
const styles = {
    container:"w-full h-full p-6 flex flex-col  space-y-4 ",
    story:"text-black biome-regular text-xl leading-9 ",
    btn:"w-8/12 bg-lightBlue flex text-base items-center biome-regular justify-center py-4 text-white "
}

const InfluencerProgram = () => {
  return (
    <div className={styles.container}>
      <p className={styles.story}>
        Sportrex is your virtual doorway to a world of endless possibilities.
        Think for a second how amazing it is for gamers to finally be able to
        earn while playing their favorite games - from board games to video
        games. Simply remarkable.
        Sportrex is your virtual doorway to a world of endless possibilities.
        Think for a second how amazing it is for gamers to finally be able to
        earn while playing their favorite games - from board games to video
        games. Simply remarkable.
        Sportrex is your virtual doorway to a world of endless possibilities.
        Think for a second how amazing it is for gamers to finally be able to
       
      </p>
      <button className={styles.btn}>Become an influencer</button>
    </div>
  );
}

export default InfluencerProgram