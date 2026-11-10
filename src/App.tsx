


import React,{useState,useEffect} from 'react';
import { StatusBar, StyleSheet, Text, View ,SafeAreaView,ActivityIndicator} from 'react-native';


import { setupPlayer,addTrack } from "../musicPlayerServices";
import MusicPlayer from './screens/MusicPlayer';

 function App() {

  const  [isPlayerReady,setIsPlayerReady]=  useState(false)


  async function setup() {
    try {
      let isSetup = await setupPlayer();

      if (isSetup) {
        await addTrack();
      }

      setIsPlayerReady(isSetup);
    } catch (error) {
      console.log("Setup error:", error);
      setIsPlayerReady(false);
    }
  }
   


  useEffect(()=>{
    setup()
  },[])
  if(!isPlayerReady){
    return(
     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <ActivityIndicator size="large" />
</SafeAreaView>
    )
  }
   return (
      <View style={styles.container}>
        <StatusBar  barStyle={"light-content"}/>
        <MusicPlayer/>
      </View>
      
 
  
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1
  }
})



export default  App
