import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdDelete,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from 'react-icons/md';
import formatPrice from '../../util/formatPrice';

import { Container, TableList, Total } from './styles';

export default function Cart() {
  const selector = useSelector((state) =>
    state.Cart.map((product) => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );
  const totalPrice = useSelector((state) =>
    formatPrice(
      state.Cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    )
  );
  const dispatch = useDispatch();

  function handleIncrementUnity(product) {
    dispatch({
      type: 'UPDATE_AMOUNT_CART',
      id: product.id,
      amount: product.amount + 1,
    });
  }
  function handleDecrementUnity(product) {
    dispatch({
      type: 'UPDATE_AMOUNT_CART',
      id: product.id,
      amount: product.amount - 1,
    });
  }
  return (
    <Container>
      <TableList>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {selector.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt="tenis" />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.newPrice}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => handleDecrementUnity(product)}
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() => handleIncrementUnity(product)}
                  >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_FROM_CART',
                      id: product.id,
                    })
                  }
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </TableList>
      <footer>
        <button type="button">Finalizar compra</button>
        <Total>
          <span>TOTAL</span>
          <strong>{totalPrice}</strong>
        </Total>
      </footer>
    </Container>
  );
}
