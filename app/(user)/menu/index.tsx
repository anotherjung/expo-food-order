import { FlatList } from 'react-native';
import ProductListItem from '@/components/productListItem';
import products from '@/assets/data/products';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query'

export default function MenuScreen() {
  console.log(33, products)

  const {data, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        throw new Error(error.message);
      }
      console.warn(44,data)
      return data;  
    },
  });

  return (
      <FlatList 
        data={data}
        renderItem={({item})=><ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{gap:10, padding: 10}}
        columnWrapperStyle={{gap:10}}
        />
  );
}