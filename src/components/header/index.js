import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

export default function Header() {
  const selector = useSelector((state) => state.Cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{selector} itens</span>
        </div>
        <MdShoppingBasket color="#FFFF" size={40} />
      </Cart>
    </Container>
  );
}
