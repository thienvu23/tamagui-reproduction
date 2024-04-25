import { StatusBar } from 'expo-status-bar';
import { Button, Stack, TamaguiProvider, Text, View } from 'tamagui';
import appConfig from './tamagui.config';
import React from 'react';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <TamaguiProvider config={appConfig}>
      <StatusBar style="auto" />
      <View f={1} bg='$background' ai='center' jc='center'>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button pressTheme theme='blue' mt='$2' size='$5'>
          Test Theme Press, mt='$3' size='$5' pressTheme
        </Button>

        <Stack pressStyle={{opacity: 0.5}} marginTop="$2" p="$3" bg="pink">
          <Text>Stack marginTop="$2" p="$3" bg="pink" {`pressStyle={{opacity: 0.5}}`}</Text>
        </Stack>

        <View marginTop="$2" p="$3" bg="pink">
          <Text>View marginTop="$2" p="$3" bg="pink"</Text>
        </View>
      </View>
    </TamaguiProvider>
  );
}

