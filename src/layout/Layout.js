import React from 'react'
import Toast from '../components/Toast/Toast'

const Layout = ({children}) => {

    return (
        <>
        <Toast/>
        {children}
        </>
    )
}

export default Layout