import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

export default function App() {
    return (
        <NavigationContainer>
            <AuthStack />
            {/* The below code is for conditional rendering and final code will be like this */}
            {/* {true ? HomeStack() : AuthStack()} */}
        </NavigationContainer>
    );
}