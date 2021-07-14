import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <PanGestureHandler
      onGestureEvent={(gestureEvent) => {
        let tranX = gestureEvent.nativeEvent.translationX;
        let tranY = gestureEvent.nativeEvent.translationY;
        console.log(`Translate X: ${tranX}, Translate Y: ${tranY}`)
      }}
      >
        <View style={styles.container}>
          <Text>Test</Text>
        </View>
      </PanGestureHandler>
    </View>
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
