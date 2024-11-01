import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Product } from '../types';
import { Colors } from '@/constants/Colors';
import { Link, useSegments } from 'expo-router';
import Button from './Button';

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }) => {
  const segments = useSegments()
  console.log(55,segments)
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image || defaultPizzaImage }} />
        <Text style={styles.text} >{product.name}</Text>
        <Text style={styles.price} >{product.price}</Text>
      </Pressable>
    </Link>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
  },

  image: {
    width: '100%',
    aspectRatio: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
