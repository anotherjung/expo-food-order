import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
    const { session } = ""

    if (session) {
        return <Redirect href={'/'} />;
    }

    return <Stack />;
}