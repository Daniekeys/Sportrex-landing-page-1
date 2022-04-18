import React from 'react'
import piechart from '../../assets/pichart.png'

const styles = {
    container: "w-full flex justify-between space-x-8 p-10 mt-4 ",
    textContainer:"grow-1 space-y-12 flex flex-col",
    textList:"flex",
    name:"text-white text-xl biome-regular",
    value:"text-yellow  text-xl biome-regular",
    imageContainer:"w-6/12 h-full",
    img:"w-full h-auto"
}
const data = [
  {
    id:"1",
    name:"Token name:",
    value:"Sportrex Token"
},
  {
    id:"2",
    name:"Symbol:",
    value:"SPT"
},
  {
    id:"3",
    name:"Maximum Supply:",
    value:"1,000,000,000SPT"
},
  {
    id:"4",
    name:"Listing price:",
    value:"$0.90"
},
  {
    id:"5",
    name:"Fully diluted MarketCap",
    value:"$900 Million"
},
]
const Tokenmetrics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer} >
           {data.map((item,index) => {
             return (
               <div className={styles.textList} key={index}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.value}>{item.value}</p>
                 </div>
             )
           })}
      </div>
      <div className={styles.imageContainer} >
            <img src={piechart} alt="piechart" className={styles.img} />
      </div>

    </div>
  )
}

export default Tokenmetrics