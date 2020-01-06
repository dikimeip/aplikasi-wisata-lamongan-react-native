import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

const FootBarItem = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={props.press}>
                <View style={{ width: 26, height: 26, marginHorizontal: 20 }}>
                    <Image source={props.icon} style={{ width: '100%', height: '100%' }} />
                </View>
                <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10,textAlign:'center' }}>{props.nama}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FootBarItem
