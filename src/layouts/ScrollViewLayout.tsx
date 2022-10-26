import {KeyboardAvoidingView, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

interface ScrollViewLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const ScrollViewLayout = ({children}: ScrollViewLayoutProps) => {
  return (
    <KeyboardAvoidingView style={style.keyboardAvoidingView}>
      <SafeAreaView style={style.container}>
        <ScrollView style={style.scrollView}>{children}</ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  keyboardAvoidingView: {flex: 1},
  container: {flex: 1, backgroundColor: 'white'},
  scrollView: {flex: 1},
});

export default React.memo(ScrollViewLayout);
