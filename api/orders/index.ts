import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/AuthProvider';
import { Order } from '@/types';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export const useAdminOrderList = () => {
    return useQuery<Order[]>({
        queryKey: ['orders'],
        queryFn: async () => {
          const { data, error } = await supabase.from('orders').select('*');
          if (error) {
            throw new Error(error.message);
          }
          return data;  
        },
      });
    } 

export const useMyOrderList = () => {
    const { session } = useAuth();
    const id = session?.user.id;
    return useQuery({
        queryKey: ['orders', { userId: id }],
        queryFn: async () => {
          if (!id) return null;
          const { data, error } = await supabase
            .from('orders')
            .select('*')
            .eq('user_id', id)
            .order('created_at', { ascending: false });
          if (error) {
            throw new Error(error.message);
          }
          return data;
        },
      });
}

export const useOrderDetails = (id: number) => {
    return useQuery({
      queryKey: ['orders', id],
      queryFn: async () => {
        const { data, error } = await supabase
          .from('orders')
          .select('*, order_items(*, products(*))')
          .eq('id', id)
          .single();
  
        if (error) {
          throw new Error(error.message);
        }
        return data;
      },
    });
  };