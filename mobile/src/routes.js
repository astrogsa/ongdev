import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Incidents from "./pages/incidents";
import Detail from "./pages/Detail";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Home" component={Incidents} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}