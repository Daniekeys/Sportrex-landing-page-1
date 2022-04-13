import React,{useState} from 'react'
import navbar from '../assets/navbar.png';
import logo from '../assets/primarylogo.png';
import cancel from '../assets/cancel.png';

const styles = {
  parentContainer: "w-full ",
  container:"w-full mt-2 mb-2 flex flex-col justify-between items-center biome-regular relative ",
  logoContainer: "w-full  flex justify-between  items-center px-2",
  logoContainer2: "w-full  flex justify-between  items-center ",
  logo: "w-32 h-full",
  navToggler: " h-full w-12  md:hidden",
  menuCard: "absolute bg-blue px-2 top-0 left-0 right-0 w-full h-screen sm:h-[90%] transition-all duration-1000 ease-in-out ",
  menuContainer: "w-full  flex flex-col px-2  transition-all duration-1000 ease-in-out",
  menuItem: "text-white text-xl ",
  menuItemActive: "text-white text-base md:text-xl",
  homeContainer: "flex flex-col mb-6 mt-8 ",
  buttonContainer: "  flex row-reverse mt-8  ",
  preBtn: "text-yellow border-yellow border-[1px] px-10 py-4 mr-4 ",
  getBtn: "text-white font-bold bg-lightBlue px-10 py-4 ",
};

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
      setOpen(true)
  }
  const handleClose = () => {
      setOpen(false)
  }
    return (
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo" className={styles.logo} />
            <img
              src={navbar}
              alt="logo"
              className={styles.navToggler}
              onClick={handleOpen}
            />
          </div>
          {open && (
            <div className={styles.menuCard}>
              {/* *******************************************Start OF HEADER 2 **************** */}
              <div className={styles.logoContainer2}>
                <img src={logo} alt="logo" className={styles.logo} />
                <img
                  src={cancel}
                  alt="logo"
                  className={styles}
                  onClick={handleClose}
                />
              </div>
              {/* *******************************************END OF HEADER 2 **************** */}
              <div className={styles.menuContainer}>
                <div className={styles.homeContainer}>
                  <a href="#home" className={styles.menuItem}>
                    Home
                  </a>
                  <div className="w-6 h-[1px] bg-white" />
                </div>
                <div className="mb-6">
                  <a
                    href="#Features"
                    className={styles.menuItem}
                    onClick={handleClose}
                  >
                    Features
                  </a>
                </div>
                <div className="mb-6">
                  <a
                    href="#Partners"
                    className={styles.menuItem}
                    onClick={handleClose}
                  >
                    Partners
                  </a>
                </div>
                <div className="mb-6">
                  <a
                    href="#Whitepaper"
                    className={styles.menuItem}
                    onClick={handleClose}
                  >
                    Whitepaper
                  </a>
                </div>
                <div className="mb-6">
                  <a
                    href="#API"
                    className={styles.menuItem}
                    onClick={handleClose}
                  >
                    API
                  </a>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.preBtn} onClick={handleClose}>
                  Pre-Sale
                </button>
                <button className={styles.getBtn} onClick={handleClose}>
                  Get Airdrop
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );};

    export default  MobileNavbar