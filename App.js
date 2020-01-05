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
  Image,
} from 'react-native';


const App = () => {
  return (
    <View style={{ backgroundColor: 'pink', flex: 1 }}>
      {/* menu konten */}
      <View style={{ backgroundColor: 'brown', flex: 1 }}></View>
      {/* menu bawah */}
      <View style={{ backgroundColor: 'white', height: 70, flexDirection: 'row', }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 30, height: 30 }}>
           <Image source={require('./src/assets/icon/home.png')} style={{width:'100%',height:'100%'}} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>DASBOARD</Text>
        </View>
        <View style={{ flex: 1 ,alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 30, height: 30 }}>
          <Image source={require('./src/assets/icon/news.png')} style={{width:'100%',height:'100%'}} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>BERITA</Text>
        </View>
        <View style={{  flex: 1 ,alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 30, height: 30 }}>
          <Image source={require('./src/assets/icon/report.png')} style={{width:'100%',height:'100%'}} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>PENGADUAN</Text>
        </View>
        <View style={{ flex: 1 ,alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 30, height: 30 }}>
          <Image source={require('./src/assets/icon/contact.png')} style={{width:'100%',height:'100%'}} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>TENTANG</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
