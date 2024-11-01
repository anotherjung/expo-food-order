import { Link, Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function MenuStack() {
    return (
        <Stack
            screenOptions={{
                headerRight: () => (
                    <Link href="/cart" asChild>
                        <Pressable>
                            {({ pressed }) => (
                                <Text>cart</Text>
                            )}
                        </Pressable>
                    </Link>
                )
            }}>
            <Stack.Screen name="index" options={{ title: 'Menu' }} />
        </Stack>
    )
}