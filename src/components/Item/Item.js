import { useNavigate } from 'react-router-dom';
import './styles.css';

const Item = (props) => {
  const { id, title, price, img, stock } = props;

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/item/${id}`;
    navigate(path);
  };

  return (
    <>
      <div className='card card-hover-shadow m-3' style={{ width: '18rem' }} >
        <img src={img} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title.length > 29 ? `${title.slice(0, 29)}...` : title}</h5>
          <p className='card-text'>Disponible: {stock}</p>
          <p className='card-text'>U$D: {price}</p>
          <button className="btn btn-dark w-100" onClick={routeChange}>Ver Detalle</button>
        </div>
      </div>
    </>
  );
};

export default Item;