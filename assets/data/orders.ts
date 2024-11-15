import { Order } from '@/types';
import products from './products';

const now = new Date().getTime()
console.log(33, products)
const orders: Order[] = [
  {
    id: 23123,
    created_at: now,
    total: 31.4,
    status: 'Cooking',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 23123,
        size: 'M',
        quantity: 2,
        product_id: products[0].id,
        products: products[0],
      },
      {
        id: 2,
        order_id: 23123,
        size: 'L',
        quantity: 1,
        product_id: products[1].id,
        products: products[1],
      },
    ],
  },
  {
    id: 99,
    created_at: now,
    total: 31.4,
    status: 'New',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 99,
        size: 'M',
        quantity: 2,
        product_id: products[0].id,
        products: products[0],
      },
      {
        id: 2,
        order_id: 99,
        size: 'L',
        quantity: 1,
        product_id: products[1].id,
        products: products[1],
      },
    ],
  }
]

export default orders;
