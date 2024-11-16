import { FlatList } from 'react-native';
import ProductListItem from '@/components/productListItem';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query'
import { useProductList } from '@/api/products'

export default function MenuScreen() {

  const { data: products, error, isLoading } = useProductList();

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