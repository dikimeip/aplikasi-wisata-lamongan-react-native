import React, { Component } from 'react';
import { View,Image,Text } from 'react-native';


const MenuFuture = () => {
    return (
        <View style={{ height: 200, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10, }}>
            <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
                <View style={{ width: 50, height: 50 }}>
                    <Image source={require('../../../assets/icon/alam.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                <Text style={{ fontWeight: 'bold', marginTop: 10, }}>WISATA ALAM</Text>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
                <View style={{ width: 50, height: 50 }}>
                    <Image source={require('../../../assets/icon/buatan.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                <Text style={{ fontWeight: 'bold', marginTop: 10, }}>WISATA BUATAN</Text>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
                <View style={{ width: 50, height: 50 }}>
                    <Image source={require('../../../assets/icon/sejarah.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                <Text style={{ fontWeight: 'bold', marginTop: 10, }}>WISATA BUDAYA</Text>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
                <View style={{ width: 50, height: 50 }}>
                    <Image source={require('../../../assets/icon/restaurant.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                <Text style={{ fontWeight: 'bold', marginTop: 10, }}>WISATA KULINER</Text>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
                <View style={{ width: 50, height: 50 }}>
                    <Image source={require('../../../assets/icon/hotel.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                <Text style={{ fontWeight: 'bold', marginTop: 10, }}>HOTEL</Text>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
                <View style={{ width: 50, height: 50 }}>
                    <Image source={require('../../../assets/icon/alam.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                <Text style={{ fontWeight: 'bold', marginTop: 10, }}>KERAJINAN</Text>
            </View>
        </View>
    )
}

export default MenuFuture