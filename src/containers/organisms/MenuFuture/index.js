import React, { Component } from 'react';
import { View, } from 'react-native';
import MenuItem from '../../../components/moleculs/MenuItem';
import { withNavigation } from 'react-navigation'



const MenuFuture = (props) => {
    return (
        <View style={{ height: 200, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10, }}>
            <MenuItem tekan={() => props.navigation.navigate("Show",{menu:'ALAM'})} nama="WISATA ALAM" foto={require('../../../assets/icon/alam.png')} />
            <MenuItem tekan={() => props.navigation.navigate("Show",{menu:'BUATAN'})} nama="WISATA BUATAN" foto={require('../../../assets/icon/buatan.png')} />
            <MenuItem tekan={() => props.navigation.navigate("Show",{menu:'BUDAYA'})} nama="WISATA BUDAYA" foto={require('../../../assets/icon/sejarah.png')} />
            <MenuItem tekan={() => props.navigation.navigate("Show",{menu:'KULINER'})} nama="WISATA KULINER" foto={require('../../../assets/icon/restaurant.png')} />
            <MenuItem tekan={() => props.navigation.navigate("Show",{menu:'HOTEL'})} nama="TEMPAT HOTEL" foto={require('../../../assets/icon/hotel.png')} />
            <MenuItem tekan={() => props.navigation.navigate("Show",{menu:'KERAJINAN'})} nama="KERAJINAN KHAS" foto={require('../../../assets/icon/kerajinan.png')} />
        </View>
    )
}

export default withNavigation(MenuFuture)