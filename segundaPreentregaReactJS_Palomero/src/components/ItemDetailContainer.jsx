import { useState, useEffect } from 'react';
import asyncMock from './asyncMock'; 
import Item from './Item';
//se importa la promesa simulada y se cera stado para almacenar el elemento

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null); // 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    asyncMock()
      .then((result) => {
        setItem(result); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error al obtener el elemento:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="item-detail-container">
      {loading ? (
        <p>Cargando la solicitud...</p>
      ) : item ? (
        <div>
            <Item item={item} />
        </div>
        
      ) : (
        <p>No encuentras lo que buscas, escríbenos!.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
