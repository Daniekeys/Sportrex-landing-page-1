import React from 'react';
import logo from '../assets/primarylogo.png';
import {useHistory} from 'react-router-dom';




const LoadingPage = () => {
    const history = useHistory();
    setTimeout(() => {
        history.push('/home');
    }, 3000);
    // write a function that will increase the width of the div by 25% every second in order to simulate loading for 4 seconds
    // use the setInterval function to do this
    // use the clearInterval function to stop the interval when the page is loaded
    // use the setTimeout function to redirect to the home page after 4 seconds
        

       


    return (
        <div className="bg-blue w-full h-screen flex justify-center items-center ">
            <img src={logo} alt="logo" />
            {/* <div className="bg-lightBlue w-full h-2 rounded-sm" /> */}
        </div>
    )
}

export default LoadingPage;