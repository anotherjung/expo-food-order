import { View, Text, Platform, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '@/providers/CartProvider';
import Button from '@/components/Button';
import CartListItem from '@/components/cartListItem';

const CartScreen = () => {
  const { items, total } = useCart();

    return (
      <View style={{ padding: 10 }}>
        <Text>cart {items.length}</Text>
        <FlatList 
          data={items}
          renderItem={({item}) => <CartListItem cartItem={item} />}
          contentContainerStyle={{ gap: 10 }}
        />
        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '500' }}>Total: ${total}</Text>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    );
  };
  
  export default CartScreen;