import React, { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';

const CartItem = ({ id, title, price, img, stock }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={img} className='' alt='...' width={50} height={'auto'} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>Precio por unidad: U$D: {price}</p>
        <p className='card-text'>Cantidad: {stock}</p>
        <button className='btn btn-danger' onClick={() => removeItem(id)}>
          Quitar del carrito
        </button>
      </div>
    </div>
  );
};

export default CartItem;
