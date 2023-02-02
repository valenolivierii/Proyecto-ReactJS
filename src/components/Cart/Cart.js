import React, { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { CartContext } from '../../context/CartProvider';
import CartForm from '../CartForm/CartForm';
import CartItem from '../CartItem/CartItem';
import EmptyCart from '../EmptyCart/EmptyCart';
import './styles.css';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const cartItems = cart.map(({ item, quantity }) => (
    <CartItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      img={item.img}
      stock={quantity}
    />
  ));

  return (
    <div>
      <Toaster position='bottom-right' />
      <h1>Checkout</h1>
      <div className='cart-container'>
        <div className='cart-list overflow-auto'>{cart.length > 0 ? cartItems : <EmptyCart />}</div>
        <div className='cart-form'>
          <CartForm />
        </div>
      </div>
    </div>
  );
};

export default Cart;
