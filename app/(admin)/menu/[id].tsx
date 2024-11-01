import { useLocalSearchParams, Stack, useRouter, Link } from 'expo-router';
import { Text, View, Image, StyleSheet, Pressable} from 'react-native';
import { useState } from 'react';
import ProductListItem, { defaultPizzaImage } from '@/components/productListItem';
import Button from '@/components/Button';
import products from '@/assets/data/products';
import { PizzaSize } from '@/types';
import { useCart} from '@/providers/CartProvider';

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p)=>p.id.toString()===id);
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const { addItem } = useCart();
  const addCart = () => {
    if (!product){
      return;
    }
    addItem(product, selectedSize);
    router.push('/cart');
  }
  const router = useRouter();

  return (
      <View style={styles.container}>
        <Stack.Screen
                options={{
                    title: 'Edit',
                    headerRight: () => ( 
                        <Link href={`/(admin)/menu/create?id=${id}`} asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <Text>edit {id}</Text>
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
        <Image style={styles.image} source={{uri:product?.image || defaultPizzaImage}} /> 
        <Text style={styles.price}>${product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});

export default ProductDetailsScreen;
