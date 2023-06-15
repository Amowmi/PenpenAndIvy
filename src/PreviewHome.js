import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

import Card from './components/Card';
import PreviewHeader from './components/PreviewHeader';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <PreviewHeader/>
        <ScrollView style={styles.scrollView}>
          <Card/>
          <Text style={{flexDirection:'center'}}>Home</Text>
          <Card/>
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
    height: '100%'
    
  },
  text: {
    alignContent: 'center'
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  }
  
});

export default App;