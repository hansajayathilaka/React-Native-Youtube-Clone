import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons'

import Home from './src/screens/Home'
import Search from './src/screens/Search'
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Subscribe from "./src/screens/Suscribe";
import { reducer } from './src/reducers/reducer'


const store = createStore(reducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
    return(
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Explore') {
                        iconName = 'explore';
                    } else if (route.name === 'Subscribe') {
                        iconName = 'subscriptions';
                    }

                    // You can return any component that you like here!
                    return <MaterialIcons name={iconName} size={ 32 } color={ color } />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name='Home' component={ Home } />
            <Tabs.Screen name='Explore' component={ Explore } />
            <Tabs.Screen name='Subscribe' component={ Subscribe } />

        </Tabs.Navigator>
    )
}

const App = () => {
    return (
        <Provider store={ store }>
            <View style={{ flex: 1 }}>
                <NavigationContainer>
                    <Stack.Navigator headerMode='none'>
                        <Stack.Screen name='RootHome' component={ RootHome } />
                        <Stack.Screen name='Search' component={ Search } />
                        <Stack.Screen name='VideoPlayer' component={ VideoPlayer } />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </Provider>
    )
}

export default App
