import React, { Component } from 'react';
import { View ,Image,Text} from 'react-native';

const NewsItem = (props) => {
    return (
        <View style={{ height: 150, margin: 15, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey' }}>
            <View style={{ flex: 1 }}>
                <Image source={props.foto} style={{ width: '100%', height: '100%' }} />
            </View>
            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 10, }}> {props.nama} </Text>
        </View>
    )
}

export default NewsItem