import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import ProfileScreen from './components/ProfileScreen';
import SecureChat from './components/SecureChat';
import LanguageSelector from './components/LanguageSelector';
import Marketplace from './components/Marketplace';
import Subscription from './components/Subscription';
import Ads from './components/Ads';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="SecureChat" component={SecureChat} />
                <Stack.Screen name="LanguageSelector" component={LanguageSelector} />
                <Stack.Screen name="Marketplace" component={Marketplace} />
                <Stack.Screen name="Subscription" component={Subscription} />
                <Stack.Screen name="Ads" component={Ads} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
