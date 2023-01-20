import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import useFirebase from '../../hooks/UseFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const {id} = useParams()
    const {producto,fetchGetIndividualProduct} = useFirebase()

    useEffect(() => {
        fetchGetIndividualProduct({id})
    }, [])

    return (
        <div>
           {producto && <ItemDetail item={producto}/>}
        </div>
    )
}

export default ItemDetailContainer
