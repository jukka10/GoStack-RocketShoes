import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border-radius: 4px;

    img {
      align-self: center;
      max-width: 250px;
      transition: transform 0.2s;
      padding: 10px;

      &:hover {
        transform: scale(1.1);
      }
    }
    > strong {
      margin-top: 5px;
      line-height: 20px;
      color: #222;
      font-size: 16px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      color: #222;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: background 0.2s;
      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
`;
