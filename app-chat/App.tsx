import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PersonalInfo from './components/PersonalInfo';
import Chat from './components/Chat';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import Styles from './components/Styles';
import AppLoading from 'expo-app-loading';

export default function App() {

  const storageUserNameKey = "chat-username"
  const storageImageKey = "chat-image"

  const [username, setUsername] = useState("");
  const [image, setImage] = useState("")
  const [isLoading, setLoading] = useState(true)


  const fetchPersonalData = async() => {
    console.log('Fetching user info ... START')
    const fetchUserName = await AsyncStorage.getItem(storageUserNameKey);
    const u = fetchUserName == null ? "" : fetchUserName;
    const fetchImage = await AsyncStorage.getItem(storageImageKey)
    const i = fetchImage == null ? "" : fetchImage;
    setUsername(u)
    setImage(i)
    console.log('Fetching user info ... COMPLETE')
  }


  const onPersonalInfoClose = async (name: string, image: string) => {
    setUsername(name)
    await AsyncStorage.setItem(storageUserNameKey, name)
    setImage(image)
    await AsyncStorage.setItem(storageImageKey, image)
  }

  // run fetchPersonalData before app is fully loaded
  if(isLoading){
    return (
      <AppLoading startAsync={fetchPersonalData} onFinish={() => setLoading(false)} onError={(e)=>console.warn(e)}/>
    )
  }

  let activeComponent = username != "" ? ( 
  <Chat username={username} image={image} /> )
  : (
    <PersonalInfo onClosed={onPersonalInfoClose} />
  )
  

  return (
    <SafeAreaView style={styles.container}>
      {activeComponent}
      {/* <PersonalInfo/> */}
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
