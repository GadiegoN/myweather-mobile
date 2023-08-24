import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from "./app.routes";

export function Routes() {
    const [loading, setLoading] = useState(false);

    if(loading) {
        return null;
    }

    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}