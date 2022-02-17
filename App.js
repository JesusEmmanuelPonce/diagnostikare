import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Calendar     from "./src/screens/Calendar";
import Prediagnosis from "./src/screens/Prediagnosis";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="prediagnosis">
            <Stack.Screen
              name="prediagnosis"
              component={Prediagnosis}
              options={{
                title: "Prediagnistico"
              }}
            />
            <Stack.Screen
              name="calendar"
              component={Calendar}
              options={{
                title: "Calendario"
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
