import { Link, Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function MenuStack() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Admin Orders' }} />
        </Stack>
    )
}