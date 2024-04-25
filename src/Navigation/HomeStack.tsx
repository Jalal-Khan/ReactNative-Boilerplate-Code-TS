import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Home,
    // Meeting,
    // Profile,
    // Settings,
    // EditProfile,
} from "../Screens";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}