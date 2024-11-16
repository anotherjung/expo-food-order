import { FlatList, Text, ActivityIndicator } from 'react-native';
import ProductListItem from '@/components/productListItem';
import products from '@/assets/data/products';
import orders from '@/assets/data/orders'
import OrderListItem from '@/components/OrderListItem';
import { useAdminOrderList } from '@/api/orders';

export default function OrderScreen() {
  const { data: orders, isLoading, error } = useAdminOrderList();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch</Text>;
  }
  return (
    <FlatList
      data={orders}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      renderItem={({ item }) => <OrderListItem order={item} />}
    />
  );
}