import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../Constants/navigationStrings';

import {
    Login,
    Signup,
    // Register,
    // ForgotPassword,
    // ResetPassword,
} from "../Screens";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
            <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />
        </Stack.Navigator>
    );
}