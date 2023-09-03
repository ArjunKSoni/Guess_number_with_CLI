import React from 'react';
import { View, StatusBar, ImageBackground, SafeAreaView } from 'react-native';
import Start from './screen/startScreen';
import { useState } from 'react';
import Gamescreen from './screen/gameScreen';
import Endscreen from './screen/endScreen';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const [screen, setScreen] = useState("")
  const [gameOver, Setgameover] = useState("")
  const [number, setNumber] = useState("")
  const [logs, setLogs] = useState([])
  let Screen = <Start setScreen={setScreen} />
  if (screen) { Screen = <Gamescreen screen={screen} setNumber={setNumber} setLogs={setLogs} Setgameover={Setgameover} setScreen={setScreen} /> }
  else if (gameOver) { Screen = <Endscreen Setgameover={Setgameover} logs={logs} number={number} setScreen={setScreen} gameOver={gameOver} /> }
  else Screen = <Start setScreen={setScreen} />

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#4B4453" }} className="flex-1">
        <ImageBackground resizeMethod="scale" style={{ height: "100%", width: "100%", position: "absolute" }} source={{ uri: "https://cdn.pixabay.com/photo/2019/08/14/20/54/mobile-video-game-vector-background-4406706_1280.png" }} />
        <StatusBar barStyle='light-content' backgroundColor={"#72063c50"} />
      <View className="flex-1 items-center pt-8 justify-start">
        {Screen}
      </View>
    </SafeAreaView >
  </>
  );
};


export default App;