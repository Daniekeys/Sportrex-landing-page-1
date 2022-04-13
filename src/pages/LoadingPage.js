import React,{useState, useEffect} from 'react';
import logo from '../assets/primarylogo.png';
import {useHistory} from 'react-router-dom';




const LoadingPage = () => {
    const history = useHistory();
    // setTimeout(() => {
    //     history.push('/home');
    // }, 3300);
    const lengthArray = ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === lengthArray.length - 1) {
                setIndex(0);
                history.push('/home');
            } else {
                setIndex(index + 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [index]);
    console.log(index);

      
                    

       


    return (
        <div className=" bg-blue w-full h-screen flex justify-center flex-col items-center px-2 md:px-4">
            <div className="w-full h-36 ">
        <div className="bg-blue w-full  flex  justify-center items-center mb-4 ">
            <img src={logo} alt="logo" />
        </div>
        
            <div className="bg-lightBlue  h-2 w-full rounded-md"  style={{
                width: lengthArray[index.toString()],
            }}/>
        </div>
        </div>
        
    )
}

export default LoadingPage;