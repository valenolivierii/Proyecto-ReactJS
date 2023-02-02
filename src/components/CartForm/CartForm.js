import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import { toast } from 'react-hot-toast';
import useFirebase from '../../hook/useFirebase';

const CartForm = () => {
  const [inputs, setInputs] = useState({});
  const { setCart, cart, clear, total, setTotal} = useContext(CartContext);
  const { updateProduct } = useFirebase();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const { sendOrder } = useFirebase();
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const vaciarCarrito = (event) => {
    setCart([]);
    setTotal(0);
    event.preventDefault();
    toast.success('Eliminaste el carrito')
  };

 const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Compra exitosa')
    const order = {
      buyer: inputs,
      itemId: cart.map((cartEl) => cartEl.item.id),
      total: total,
    };
    cart.forEach((cartItem) =>
      updateProduct(cartItem.item.id, cartItem.item.quantity - cartItem.quantity)
    );
    sendOrder(order.buyer, order.itemId, order.total);
    clear();
    setTotal(0);
  };
  return (
    <form onSubmit={handleSubmit}>
      <strong>Total a pagar: U$D: {total.toFixed(2)}</strong>
      <div className='mb-3'>
        <label htmlFor='emailField' className='form-label'>
          Email
        </label>
        <input
          type='email'
          name='email'
          value={inputs.email || ''}
          className='form-control'
          id='emailField'
          aria-describedby='emailHelp'
          onChange={handleChange}
        />
        <div id='emailHelp' className='form-text'></div>
      </div>
      <div className='mb-3'>
        <label htmlFor='firstnameField' className='form-label'>
          Nombre
        </label>
        <input
          type='text'
          name='firstname'
          value={inputs.firstname || ''}
          className='form-control'
          id='firstnameField'
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='lastnameField' className='form-label'>
          Apellido
        </label>
        <input
          type='text'
          name='lastname'
          value={inputs.lastname || ''}
          className='form-control'
          id='lastnameField'
          onChange={handleChange}
        />
      </div>
      <div className='row g-2'>
        <button type='submit' className='btn btn-danger' onClick={vaciarCarrito}>
          Eliminar carrito
        </button>
        <button className='btn btn-outline-primary'>Comprar</button>
      </div>
      <div className='row g-2 mt-4'>
        <button className='btn btn-outline-secondary' onClick={routeChange}>
          Seguir comprando
        </button>
      </div>
    </form>
  );
};

export default CartForm;