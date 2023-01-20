import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = () => useContext(GlobalContext)

const GlobalState = ({children}) => {
    const [mostrarAlerta,setMostrarAlerta] = useState(false);

    return (
        <GlobalContext.Provider value={{
            mostrarAlerta,
            setMostrarAlerta,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
