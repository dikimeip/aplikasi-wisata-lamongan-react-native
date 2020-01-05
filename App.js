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
    <View style={{ flex: 1 }}>
      {/* menu konten */}
      <View style={{ flex: 1 }}>
        {/* Image Slider */}
        <View style={{ backgroundColor: 'yellow', height: 200 }}></View>
        {/* menu fiture */}
        <View style={{ backgroundColor: 'green', height: 200, flexDirection: 'row', flexWrap: 'wrap' }}>
          <View style={{marginTop: 20,alignItems:'center',justifyContent:'center', backgroundColor: 'white', height: 70,  width: '25%' }}></View>
          <View style={{marginTop: 20,alignItems:'center',justifyContent:'center', backgroundColor: 'black', height: 70,  width: '25%' }}></View>
          <View style={{marginTop: 20,alignItems:'center',justifyContent:'center', backgroundColor: 'pink', height: 70,  width: '25%' }}></View>
          <View style={{marginTop: 20,alignItems:'center',justifyContent:'center', backgroundColor: 'red', height: 70,  width: '25%' }}></View>
          <View style={{marginTop: 20,alignItems:'center',justifyContent:'center', backgroundColor: 'white', height: 70,  width: '25%' }}></View>
          <View style={{marginTop: 20,alignItems:'center',justifyContent:'center', backgroundColor: 'black', height: 70,  width: '25%' }}></View>
          <View style={{marginTop: 20,alignItems:'center',justifyContent:'center', backgroundColor: 'pink', height: 70,  width: '25%' }}></View>
          <View style={{marginTop: 20,alignItems:'center',justifyContent:'center', backgroundColor: 'red', height: 70,  width: '25%' }}></View>
        </View>
      </View>
      {/* menu bawah */}
      <View style={{ backgroundColor: 'white', height: 70, flexDirection: 'row', }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 26, height: 26 }}>
            <Image source={require('./src/assets/icon/home.png')} style={{ width: '100%', height: '100%' }} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>DASBOARD</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 26, height: 26 }}>
            <Image source={require('./src/assets/icon/news.png')} style={{ width: '100%', height: '100%' }} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>BERITA</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 26, height: 26 }}>
            <Image source={require('./src/assets/icon/report.png')} style={{ width: '100%', height: '100%' }} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>PENGADUAN</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 26, height: 26 }}>
            <Image source={require('./src/assets/icon/contact.png')} style={{ width: '100%', height: '100%' }} />
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
