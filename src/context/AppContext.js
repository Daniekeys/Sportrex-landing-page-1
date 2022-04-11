import React, {useEffect, useState} from 'react';


export const AppContext = React.createContext();


export const AppProvider = ({children}) => {
 const [userData, setUserData] = useState({});
 const [allUsers, setAllUsers] = useState([]);

    


 
    return (
        <AppContext.Provider value={{userData, setUserData, allUsers, setAllUsers}}>
            {children}
        </AppContext.Provider>
    )
};