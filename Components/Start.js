import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View ,StyleSheet, Text, Button, TextInput} from 'react-native';
import Login from './Login';
import Register from './Registration';
const Stack= createNativeStackNavigator();
const start= ()=>{
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerStyle:{backgroundColor:'pink'},
                headerTintColor:'white',
                headerTitleStyle:{fontSize:20}
                }}>
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/> 
                <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default start;