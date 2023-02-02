import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();

useEffect(() => {
  setTimeout(() => {
   navigate('/', { replace: true });
  },3000);
  }, []);
  return <p>El carrito está vacío. Redirigiendose al inicio...</p>;
};

export default EmptyCart;
