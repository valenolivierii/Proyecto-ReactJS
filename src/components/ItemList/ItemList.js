import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
    return (
        <div className="row p-2  p-lg-5 full-height align-items-center">
         { items && items.map((elemento) => (
             <Item 
             key={elemento.id}
             item={elemento}
             />
         ))} 
        </div>
    )
}

export default ItemList