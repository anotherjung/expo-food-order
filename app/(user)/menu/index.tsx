import { FlatList } from 'react-native';
import ProductListItem from '@/components/productListItem';
import products from '@/assets/data/products';

export default function HomeScreen() {

  return (
      <FlatList 
        data={products}
        renderItem={({item})=><ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{gap:10, padding: 10}}
        columnWrapperStyle={{gap:10}}
        />
  );
}