import React from 'react'
import allstar from "../assets/allstar.png";

const styles = {
    container:"w-full flex space-x-10 my-16",
    textContainer:"w-4/12 flex items-center",
    text:"biome-bold text-3xl text-white w-8/12",
    imageContainer:"w-8/12",

    img:"w-full h-full"
}

const ListComponent = () => {
    return (
            <div className={styles.container}>
                <div className={styles.textContainer}>
                <p className={styles.text}>
                    Sportrex token is listed on
                    </p>
                </div>
                <div className={styles.imageContainer}>
                <img src={allstar} className={styles.img} />
                </div>
            </div>
    )
}

export default ListComponent