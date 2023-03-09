import React, { createContext, useContext, useState, useEffect } from  'react';

const AppContext = createContext();

export default function AppWrapper({children}) {
    // --------------------------------
    // States
    // --------------------------------
        const [userName, setUserName] = useState("");


    // --------------------------------
    // Variables
    // --------------------------------
    const directory = 'http://127.0.0.1:5000';


    // --------------------------------
    // custom functions
    // --------------------------------


    // --------------------------------
    // Function Listeners
    // --------------------------------


    // --------------------------------
    // Shared Exports
    // --------------------------------
    let sharedState = {
        // --------------------------------
        // Shared Function Exports
        // --------------------------------


        // --------------------------------
        // Shared Variable Exports
        // --------------------------------

        directory: directory,
    }

    return  <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext);
}