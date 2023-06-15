import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';

import Card from './components/Card';
import PreviewHeader from './components/PreviewHeader';
import { PaperProvider } from 'react-native-paper';
import { Pressable } from 'react-native';
import GlobalStyle from './utils/GlobalStyle';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PreviewScreen from './screens/PreviewScreen';

const Stack = createStackNavigator();

function App() {

  

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='PreviewScreen'
            component={PreviewScreen}
            options={{headerShown: false}}

          >

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({

  
});

export default App;