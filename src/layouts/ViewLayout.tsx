import {SafeAreaView, KeyboardAvoidingView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';

interface ViewLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const ViewLayout = ({children}: ViewLayoutProps) => {
  return (
    <KeyboardAvoidingView style={style.keyboardAvoidingView}>
      <SafeAreaView style={style.container}>
        <StatusBar animated={true} backgroundColor="white" barStyle={'dark-content'} />
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  keyboardAvoidingView: {flex: 1},
  container: {flex: 1, backgroundColor: 'white'},
});

export default React.memo(ViewLayout);
