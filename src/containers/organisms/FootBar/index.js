import React, { Component } from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import FootBarItem from '../../../components/moleculs/FootBarItem';
import { withNavigation } from 'react-navigation';

const FootBar = (props) => {
    return (
        <View style={{ backgroundColor: 'white', height: 70, flexDirection: 'row', }}>
            <FootBarItem press={() => props.navigation.navigate('HomePages')} icon={require('../../../assets/icon/home.png')} nama="Dasboard" />
            <FootBarItem press={() => props.navigation.navigate('BeritaPages')} icon={require('../../../assets/icon/news.png')} nama="Berita"/>
            <FootBarItem press={() => props.navigation.navigate('pengaduanPages')} icon={require('../../../assets/icon/report.png')} nama="Pengaduan"/>
            <FootBarItem press={() => props.navigation.navigate('tentangPages')} icon={require('../../../assets/icon/contact.png')} nama="Tentang"/>
        </View>
    )
}

export default withNavigation(FootBar) 