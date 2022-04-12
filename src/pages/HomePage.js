import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const styles = {
    parentContainer: 'bg-blue w-full h-full min-h-screen flex  justify-center',
    container: 'w-full h-full flex flex-col sm:px-4 md:p-2 lg:w-11/12 items-center',


}

const HomePage = () => {
    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
            <Navbar />


            <Footer/>
        </div>
        </div>
    )
}

export default HomePage;