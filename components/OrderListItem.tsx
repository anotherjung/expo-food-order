import { Text, FlatList, View, StyleSheet, Pressable } from "react-native"
import { Link, useSegments } from 'expo-router';
import { Order } from "@/types";

type OrderListItemProps = {
    order: Order;
  };
  
const OrderListItem = ( { order }: OrderListItemProps ) => {
    console.log(33,order)
    const segments = useSegments();

    return (
        <Link href={`/${segments[0]}/order/${order.id}`} asChild>
        <Pressable style={styles.container}>
          <View>
            <Text style={styles.title}>Order #{order.id}</Text>
            <Text style={styles.time}>{order.created_at}</Text>
          </View>
  
          <Text style={styles.status}>{order.status}</Text>
        </Pressable>
      </Link>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      marginVertical: 5,
    },
    time: {
      color: 'gray',
    },
    status: {
      fontWeight: '500',
    },
  });

export default OrderListItem;
