import React,{useState} from 'react'
import allGamesImage from "../../assets/allGames.png";
const styles = {
  parentContainer:"w-full h-full  flex-col px-4 pt-4 biome-regular space-y-4 bg-white",
  btnContainer:"w-full flex justify-center space-x-4 items-center ",
  activeBtn:"text-white bg-lightBlue px-6 py-2",
  nonActive:"text-grey border-2 border-grey px-6 py-2",
  imgContainer:"w-full h-full ",
  img:"w-10/12 h-auto mx-auto",
  textParent:"flex w-full h-full flex-col space-y-4 px-4",
  textContainer:"flex border-b-2 pb-2 border-grey leading-9 font-bold ",
  textName:"text-lightBlue text-lg biome-regular",
  story:"biome-regular text-lg text-black "
}
const sportrexGame = [
  {
    id:"1",
    name:"Sportrex-",
    story:`  Sportrex is your virtual doorway to a world of endless
              possibilities. Think for a second how amazing it is for gamers to
              finally be able to earn while playing their favorite games - from
              board games to video games. Simply remarkable.`,
  },
  {
    id:"2",
    name:"Sportrex-",
    story:`  Sportrex is your virtual doorway to a world of endless
              possibilities. Think for a second how amazing it is for gamers to
              finally be able to earn while playing their favorite games - from
              board games to video games. Simply remarkable.`,
  },
  {
    id:"3",
    name:"Sportrex-",
    story:`  Sportrex is your virtual doorway to a world of endless
              possibilities. Think for a second how amazing it is for gamers to
              finally be able to earn while playing their favorite games - from
              board games to video games. Simply remarkable.`,
  },
  {
    id:"4",
    name:"Sportrex-",
    story:`  Sportrex is your virtual doorway to a world of endless
              possibilities. Think for a second how amazing it is for gamers to
              finally be able to earn while playing their favorite games - from
              board games to video games. Simply remarkable.`,
  },
  
]

// ###########################################################################################################
const SportrexGame = () => {
  return (
    <div className={styles.textParent}>
      {
        sportrexGame.map((item, index) => {
          return (
            <div className={styles.textContainer} key={index}>
              <p className={styles.textName}>{item.name}</p>
              <p className={styles.story}>{item.story}</p>
              </div>
          )
        })
      }
    </div>
  )
}







// #####################################################################################################

const FeatureGame = () => {
  const [allGames, setAllGames] = useState(true);

  return (
    <div className={styles.parentContainer}>
      <div className={styles.btnContainer}>
        <button
          className={`${allGames ? styles.activeBtn : styles.nonActive}`}
          onClick={() => setAllGames(true)}
        >
          All Games
        </button>
        <button
          className={`${allGames ? styles.nonActive : styles.activeBtn}`}
          onClick={() => setAllGames(false)}
        >
          Sportrex Games
        </button>
      </div>
      <div className={styles.imgContainer}>
        {
          allGames ? (
            <img src={allGamesImage} className={styles.img} alt="sportrex games" />
          ) :( <SportrexGame />)
        }
      </div>
    </div>
  );
}

export default FeatureGame