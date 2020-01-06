import React, { Component } from 'react'
import { View,Text,Image } from 'react-native'

const TentangMenu = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>ABOUT DINAS PARIWISATA KABUPATEN LAMONGAN</Text>
            <Image source={require('../../../assets/foto/lmg.png')} />
        </View>
    )
}

export default TentangMenu
