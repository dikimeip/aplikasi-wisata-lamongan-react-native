import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import WisataItem from '../../../components/moleculs/WisataItem';

const WisataBudayaMenu = () => {
    return (
        <View style={{ height: 210, marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'grey' }}>WISATA BUDAYA</Text>
            <ScrollView horizontal>
                <View style={{ flexDirection: 'row' }}>
                    <WisataItem nama="Dummy Picture" foto={require('../../../assets/foto/m1.jpg')} />
                    <WisataItem nama="Dummy Picture" foto={require('../../../assets/foto/m1.jpg')} />
                    <WisataItem nama="Dummy Picture" foto={require('../../../assets/foto/m1.jpg')} />
                    <WisataItem nama="Dummy Picture" foto={require('../../../assets/foto/m1.jpg')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default WisataBudayaMenu