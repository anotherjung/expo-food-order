import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { Text, View, Image, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import ProductListItem, { defaultPizzaImage } from '@/components/productListItem';
import Button from '@/components/Button';
import { PizzaSize } from '@/types';
import { useCart} from '@/providers/CartProvider';
import { useProduct } from '@/api/products';

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);
  const { data: product, error, isLoading } = useProduct(id);

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

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: product?.name || "name"}} />
        <Image style={styles.image} source={{uri:product?.image || defaultPizzaImage}} /> 
        <Text>Select size</Text>
        <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? 'gainsboro' : 'white',
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color: selectedSize === size ? 'black' : 'gray',
                },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
        <Text style={styles.price}>${product?.price}</Text>
        <Button onPress={addCart} text="add to cart"/>
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

  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default ProductDetailsScreen;
