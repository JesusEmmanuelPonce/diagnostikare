import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Prediagnosis from "../screens/Prediagnosis";
import Calendar from "../screens/Calendar";

export default function Navigator () {

    
    const Stack = createStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="prediagnosis" component={Prediagnosis} />
                <Stack.Screen name="calendar" component={Calendar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
