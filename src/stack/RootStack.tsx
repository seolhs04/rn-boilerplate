import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer, NavigationProp, RouteProp} from '@react-navigation/native';
import Main from '@/screens/Main';

export interface RootStackProps {}

export type RootStackParamList = {
  Main: undefined;
};

export interface RootScreenProps {
  route: RouteProp<RootStackParamList>;
  navigation: NavigationProp<RootStackParamList>;
}
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type RootStackRouteProp = RouteProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = (_: RootStackProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Main'}
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.DefaultTransition,
        }}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
