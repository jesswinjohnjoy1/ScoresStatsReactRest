import React, { useState, useEffect } from 'react';
import { LoginBtn } from '../Componentes/Buttons';
import { useNavigate } from 'react-router-dom';
import { GetData } from '../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await GetData();
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const viewProduct = (productId) => {
    navigate(`/View/${productId}`);
  };

  return (
    <div className='data-container'>
      {products.map((product) => (
        <div key={product.pid} className="card-container" onClick={() => viewProduct(product.pid)}>
          <div className="card">
            <div className="front-content">
              <img src={product.playerimg} className='card-img' alt='tree' />
            </div>
            <div className="content">
              <p className="heading">{product.playername}</p>
              <p>
                Assists: {product.assists}
                <br />
                Goals: {product.goals}
              </p>
            </div>
          </div>
        </div>
      ))}
      <LoginBtn />
    </div>
  );
}
