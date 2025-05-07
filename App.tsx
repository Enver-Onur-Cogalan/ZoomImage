import React from 'react';
import ZoomImage from './src/ZoomImage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ZoomImage />
    </GestureHandlerRootView>
  )
}

export default App;
