import React, { Component } from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import FootBarItem from '../../../components/moleculs/FootBarItem';

const FootBar = () => {
    return (
        <View style={{ backgroundColor: 'white', height: 70, flexDirection: 'row', }}>
            <FootBarItem icon={require('../../../assets/icon/home.png')} nama="Dasboard" />
            <FootBarItem icon={require('../../../assets/icon/news.png')} nama="Berita"/>
            <FootBarItem icon={require('../../../assets/icon/report.png')} nama="Pengaduan"/>
            <FootBarItem icon={require('../../../assets/icon/contact.png')} nama="Tentang"/>
        </View>
    )
}

export default FootBar