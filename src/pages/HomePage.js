import React from 'react';

import {Footer, Navbar, About, MobileNavbar, AddsCard, DesktopHero, Partners, Tokennomics} from '../components';
const styles = {
    parentContainer: 'bg-blue w-full h-full min-h-screen flex  justify-center',
    container: 'w-full h-full flex px-2 flex-col sm:px-4 md:p-2 lg:w-11/12 items-center',
    mobileNavbar: 'md:hidden w-full',
    desktopNavbar:'hidden md:flex w-full'
}

const HomePage = () => {
    return (
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <div className={styles.desktopNavbar}>
            <Navbar />
          </div>
          <div className={styles.mobileNavbar}>
            <MobileNavbar />
          </div>
          <DesktopHero />
          <Partners />
          <About />
          <AddsCard />
          <Tokennomics />  
          <Footer />
        </div>
      </div>
    );
}

export default HomePage;