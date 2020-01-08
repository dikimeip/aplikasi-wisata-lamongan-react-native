import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const MenuItem = (props) => {
    return (

        <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
            <TouchableOpacity onPress={props.tekan} >
                <View style={{ width: 50, height: 50,marginHorizontal:30 }}>
                    <Image source={props.foto} style={{ width: '100%', height: '100%' }} />
                </View>
                <Text style={{ fontWeight: 'bold', marginTop: 10, }}>{props.nama}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MenuItem