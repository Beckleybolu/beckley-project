import React,{ useContext,useState } from "react";

const AppCOntext = React.createContext();

const AppProvider = ({children})=>{
const [showSideBar,setShowSideBar] = useState(false);

const openSideBar = ()=>{
    setShowSideBar(true)
}
const closeSideBar = ()=>{
    setShowSideBar(false)
}

        return(
            <>
              <AppCOntext.Provider value={{
                showSideBar,closeSideBar,openSideBar
              }}>
                {children}
            </AppCOntext.Provider>
            </>
          
        )
};

export const useGlobalConext = ()=>{
    return useContext(AppCOntext);
}

export {AppProvider}