import { createContext } from 'react';



export const AppContext = createContext();


const ContextProvider = (props) =>{
    const name  = "John";
    return(
        <AppContext.Provider value={name}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;