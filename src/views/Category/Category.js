import React from 'react'
import { useParams } from 'react-router'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Navbar from '../../components/NavBar/NavBar'

const Category = () => {
    const {category} = useParams()

    return (
        <div>
            <Navbar/>
            <ItemListContainer filter={category}/>
        </div>
    )
}

export default Category