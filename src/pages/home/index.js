import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import formatPrice from '../../util/formatPrice';

import Animation from '../../components/Loading';
import { ProductList } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const TotalInCart = useSelector((state) =>
    state.Cart.reduce((amount, product) => {
      amount[product.id] = product.amount;

      return amount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const { data } = await api.get('/products');
      const Data = data.map((value) => ({
        ...value,
        newPrice: formatPrice(value.price),
      }));
      setProducts(Data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  function hanldeAddToCart(product) {
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  }

  if (!loading) {
    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt="tenis" />
            <strong>{product.title}</strong>
            <span>{product.newPrice}</span>
            <button type="button" onClick={() => hanldeAddToCart(product)}>
              <div>
                <MdAddShoppingCart color="#fff" size={16} />{' '}
                {TotalInCart[product.id] || 0}
              </div>
              <span>Adicone ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
  return <Animation />;
}
