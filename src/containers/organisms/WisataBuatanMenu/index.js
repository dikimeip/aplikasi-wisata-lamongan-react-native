import React, { Component } from 'react';
import { View,Text,ScrollView,Image } from 'react-native';

const WisataBuatanMenu = () => {
    return (
        <View style={{ height: 210, marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'grey' }}>WISATA BUATAN</Text>
            <ScrollView horizontal>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                            <Image source={require('../../../assets/foto/m1.jpg')} style={{ width: '100%', height: '100%', }} />
                        </View>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Kutang</Text>
                    </View>
                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                            <Image source={require('../../../assets/foto/m2.jpg')} style={{ width: '100%', height: '100%', }} />
                        </View>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Klayar</Text>
                    </View>
                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                            <Image source={require('../../../assets/foto/m3.jpg')} style={{ width: '100%', height: '100%', }} />
                        </View>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Cemara</Text>
                    </View>
                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                            <Image source={require('../../../assets/foto/m4.jpg')} style={{ width: '100%', height: '100%', }} />
                        </View>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Kute</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default WisataBuatanMenu