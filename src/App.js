import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, TouchableHighlight, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';

import { PaperProvider } from 'react-native-paper';
import GlobalStyle from './utils/GlobalStyle';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import PreviewScreen from './screens/PreviewScreen';
import Medium_Buttons from './components/CustomButton';
import Icon_Button from './components/IconButton';
import Edit_Header from './components/backButton';
import EditingScreen from './screens/EditingScreen';

const isDarkMode = false;
const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white', // 设置背景颜色
    primary: 'blue', // 设置主要颜色
    text: 'black', // 设置文本颜色
    card: '#1E1E1E', // 设置卡片颜色
    border: '#1E1E1E', // 设置边框颜色
    notification: 'yellow', // 设置通知颜色
    headerTintColor: 'white', // 设置标题栏文本颜色
    // 添加其他您想要更改的颜色属性...
  },
};
const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white', // 设置背景颜色
    primary: 'blue', // 设置主要颜色
    text: 'black', // 设置文本颜色
    card: 'white', // 设置卡片颜色
    border: 'white', // 设置边框颜色
    notification: 'yellow', // 设置通知颜色
    headerTintColor: 'white', // 设置标题栏文本颜色
    // 添加其他您想要更改的颜色属性...
  },
};

const Stack = createStackNavigator();

function App() {
  onPressHandler_Download= () =>{

  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='PreviewScreen'
            component={PreviewScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name='EditingScreen'
            component={EditingScreen}
            options={({navigation}) => ({ 
              title: '...', 
              headerStyle: {height: 70, borderColor: '#fff'},
              headerLeft: () => (
              <View style={{ marginRight: -10, marginLeft: 3 }}>
                <Edit_Header  onPress={() => 
                  navigation.navigate('PreviewScreen')}/* Back Button */  />  
                
              </View>
              ),
              headerRight: () => (
                <View style={{ marginRight: 20, marginLeft: -10 }}>
                  <Medium_Buttons  // Download Button
                  onPressFunction={onPressHandler_Download}
                  labelArray={{fontSize: 8, flex: -1, lineHeight: 22, marginHorizontal: 0, paddingVertical: 0, marginVertical: 0, paddingHorizontal: 0}}
                  title={'Download'}
                  styleArray={{height: 23, width: 60}}
                />
                </View>
                
              )
            })}
            
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({

  
});

export default App;