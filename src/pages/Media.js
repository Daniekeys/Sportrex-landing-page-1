import React from 'react'
import {mediaData} from '../components/mediaData'
import MediaComponent from '../components/MediaComponent'
const styles = {
    mainWrapper:`w-full h-full min-h-screen flow-hide`,
    container:`w-full flex justify-between h-full`,
    leftContainer:` w-0 sm:w-3/12 h-screen  `,
    rightContainer:`w-0 sm:w-3/12 h-screen  `,
    centerContainer:` w-full sm:w-6/12 h-full flex flex-col `,
}

const Media = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        <div className={styles.leftContainer}></div>
    <div className={styles.centerContainer}>
    {mediaData.map((media,index)=>{
      return <MediaComponent key={index} media={media}/>
    })}
    </div>
    <div className={styles.rightContainer}></div>
    </div>
    </div>
  )
}

export default Media