export default function formatPrice(price) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',
  }).format(price);
}
