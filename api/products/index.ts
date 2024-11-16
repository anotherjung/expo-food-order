import { supabase } from "@/lib/supabase";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useProductList = () => {
    return useQuery<Product[]>({
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
    }