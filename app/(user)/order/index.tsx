import { Text, FlatList } from 'react-native';
import ProductListItem from '@/components/productListItem';
import products from '@/assets/data/products';
import orders from '@/assets/data/orders'
import OrderListItem from '@/components/OrderListItem';

export default function OrderScreen() {
    console.log(11,orders)
  return (
<FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => <OrderListItem order={item} /> }
      />
  );
}