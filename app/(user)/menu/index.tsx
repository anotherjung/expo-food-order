import { FlatList } from 'react-native';
import ProductListItem from '@/components/productListItem';
import products from '@/assets/data/products';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query'

export default function MenuScreen() {
  let productList

  useEffect(()=>{
    const fetchProducts = async () =>{
      const { data, error } = await supabase.from('products').select('*');
      console.log(22,data)
      if (error) {
        throw new Error(error.message);
      }
      productList = data
      console.log(44,productList)
    }
    fetchProducts()
  },[])

  console.log(33, products)




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