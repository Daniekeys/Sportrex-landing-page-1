import React from 'react'
import {FaBars} from 'react-icons/fa';
import logo from '../assets/primarylogo.png';

const styles = {
    parentContainer: 'w-full ',
    container: 'w-full mt-2 mb-2 flex justify-between items-center biome-regular',
    logoContainer: 'w-full h-full md:w-2/12 flex justify-between  items-center',
    logo: 'w-full h-full',
    navToggler: ' text-2xl text-white md:hidden',
    menuContainer: 'w-full md:w-6/12 flex justify-evenly items-center',
    menuItem: 'text-white text-base md:text-xl',
    menuItemActive: 'text-white text-base md:text-xl',
    homeContainer:'flex flex-col',
    buttonContainer: ' md:w-4/12 flex justify-end items-center',
    preBtn: 'text-yellow border-yellow border-[1px] px-6 py-2 mr-4 ',
    getBtn: 'text-white font-bold bg-lightBlue px-4 py-2 ',
}

const Navbar = () => {
    // write a function that applies the active class to the menu item
    const activeClass = (path) => {
        if(path === window.location.pathname){
            return styles.menuItemActive
        } else {
            return styles.menuItem
        }
    }

    return (
           <div className={styles.parentContainer}>
               <div className={styles.container}>
                     <div className={styles.logoContainer}>
                            <img src={logo} alt="logo" className={styles.logo}/>
                            <FaBars className={styles.navToggler}/>
                            
               </div> 
                <div className={styles.menuContainer}>
                    <div className={styles.homeContainer}>
                        <a href="#home" className={styles.menuItem}>Home</a>
                        <div className="w-6 h-[1px] bg-white"/>
                            </div>
                    <div className={activeClass('/about')}>
                        <a href="#Features" className={styles.menuItem}>Features</a>
                        </div>
                    <div className={activeClass('/about')}>
                        <a href="#Partners" className={styles.menuItem}>Partners</a>
                        </div>
                    <div className={activeClass('/about')}>
                        <a href="#Whitepaper" className={styles.menuItem}>Whitepaper</a>
                        </div>
                    <div className={activeClass('/about')}>
                        <a href="#API" className={styles.menuItem}>API</a>
                        </div>


               </div> 
                <div className={styles.buttonContainer}>
                    <button className={styles.preBtn}>Pre-Sale</button>
                    <button className={styles.getBtn}>Get Airdrop</button>
               </div> 
               </div> 

               </div> 
               
    )};

    export default Navbar 