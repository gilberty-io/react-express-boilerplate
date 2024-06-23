import React, { useState, useEffect } from 'react';
import './app.scss';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => setProducts(products));
  }, [])

  return (
      <div>
        {JSON.stringify(products)}
      </div>
  );
}

export default App;
