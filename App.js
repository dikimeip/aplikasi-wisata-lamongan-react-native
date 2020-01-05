/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


const App = () => {
  return (
    <View style={{ backgroundColor: 'pink', flex: 1 }}>
      {/* menu konten */}
      <View style={{ backgroundColor: 'brown', flex: 1 }}></View>
      {/* menu bawah */}
      <View style={{ backgroundColor: 'blue', height: 70, flexDirection: 'row', }}>
        <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'pink', width: 30, height: 30 }}></View>
          <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>DASBOARD</Text>
        </View>
        <View style={{ backgroundColor: 'green', flex: 1 ,alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'pink', width: 30, height: 30 }}></View>
          <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>DASBOARD</Text>
        </View>
        <View style={{ backgroundColor: 'black', flex: 1 ,alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'pink', width: 30, height: 30 }}></View>
          <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>DASBOARD</Text>
        </View>
        <View style={{ backgroundColor: 'yellow', flex: 1 ,alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'pink', width: 30, height: 30 }}></View>
          <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>DASBOARD</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
