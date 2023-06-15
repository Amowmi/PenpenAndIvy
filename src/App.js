import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';

import Card from './components/Card';
import PreviewHeader from './components/PreviewHeader';
import { PaperProvider } from 'react-native-paper';
import { Pressable } from 'react-native';
import GlobalStyle from './utils/GlobalStyle';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('Home');
  const OnSelectPress = () =>{
    setIsOpen(!isOpen);
  }
  const onOriginalPress = () => {
    setIsOpen(!isOpen);
    setMode('Original');
  };
  const onHomePress = () => {
    setIsOpen(!isOpen);
    setMode('Home');
  };
  const onLockPress = () => {
    setIsOpen(!isOpen);
    setMode('Lock');
  };
  

  return (
    <PaperProvider>
      <Modal transparent visible={isOpen}  >
        <Pressable  onPress={OnSelectPress} style={styles.modal2}>
          <View style={styles.modal}>
              <Text style={[styles.title, GlobalStyle.Primary_Linear_p_font]}>Select Mode</Text>
              <View style={styles.Madalbutton}>
                <TouchableHighlight onPress={onOriginalPress} style={[styles.button,GlobalStyle.Primary_Linear_p]}>
                  <Text style={styles.buttonfont}>Original</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={onHomePress} style={[styles.button,GlobalStyle.Primary_Linear_p]}>
                  <Text style={styles.buttonfont}>HomeScreen</Text>
                 </TouchableHighlight>
                 <TouchableHighlight onPress={onLockPress} style={[styles.button,GlobalStyle.Primary_Linear_p]}>
                  <Text style={styles.buttonfont}>LockScreen</Text>
                 </TouchableHighlight>
              </View>
            </View>
        </Pressable>

      </Modal>
      <View style={styles.container}>
        <PreviewHeader PressHandler={OnSelectPress} Mode={mode}/>
        <ScrollView style={styles.scrollView}>
          <Card Mode={mode}/>
          <Text style={{flexDirection:'center'}}>Origin</Text>
          <Card Mode={mode}/>
          <Card Mode={mode}/>
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  text: {
    alignContent: 'center'
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  modal2:{ // Modal Background
    flex:1,
    width: '100%',
    alignItems:'center',
    backgroundColor:'#888888',
    opacity:0.9
  },
  modal:{ // Modal
    opacity:1,
    width:'100%',
    height:180,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
  },
  title:{
    fontWeight: 'bold',
    fontSize:23,
    paddingTop: 40
  },
  button:{
    justifyContent: 'center',
    height: 30,
    width: '27%',
    alignItems: 'center',
    margin: 7,
    borderRadius: 20,
  },
  Madalbutton:{
    flexDirection: 'row',
    margin:10
  },
  buttonfont: {
    color: '#ffffff'
  }
  
});

export default App;