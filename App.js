/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text style={styles.hello}>Hello world</Text>
      <Text style={styles.my}>My world</Text>
      <Text style={styles.new}>New world</Text>

      <Text style={styles.hello}>Hello world</Text>
      <Text style={styles.my}>My world</Text>
      <Text style={styles.new}>New world</Text>

      <Text style={styles.hello}>Hello world</Text>
      <Text style={styles.my}>My world</Text>
      <Text style={styles.new}>New world</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  base: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 50,
  },
  hello: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 50,
    backgroundColor: 'powderblue',
    // flex: 1,
  },
  my: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 50,
    backgroundColor: 'steelblue',
  },
  new: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 50,
    backgroundColor: 'lightgreen',
  },
});

export default App;
