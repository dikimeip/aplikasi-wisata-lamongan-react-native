import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

const WisataItem = (props) => {
    return (
        <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
            <View style={{ height: 100, backgroundColor: 'pink' }}>
                <Image source={props.foto} style={{ width: '100%', height: '100%', }} />
            </View>
            <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>{props.nama}</Text>
        </View>
    )
}

export default WisataItem