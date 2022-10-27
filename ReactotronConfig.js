import {NativeModules} from 'react-native';
import Reactotron, {trackGlobalErrors} from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let host;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  host = scriptURL.split('://')[1].split(':')[0];
}

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({host}) // controls connection & communication settings
  .use(trackGlobalErrors())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

if (__DEV__) {
  const consoleLog = console.log;
  console.log = (...args) => {
    consoleLog(...args);
    Reactotron.debug(...args, true);
  };
}

export default reactotron;
