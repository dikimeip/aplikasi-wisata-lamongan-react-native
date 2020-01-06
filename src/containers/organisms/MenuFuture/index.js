import React, { Component } from 'react';
import { View, } from 'react-native';
import MenuItem from '../../../components/moleculs/MenuItem';


const MenuFuture = () => {
    return (
        <View style={{ height: 200, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10, }}>
            <MenuItem nama="WISATA ALAM" foto={require('../../../assets/icon/alam.png')} />
            <MenuItem nama="WISATA BUATAN" foto={require('../../../assets/icon/buatan.png')} />
            <MenuItem nama="WISATA BUDAYA" foto={require('../../../assets/icon/sejarah.png')} />
            <MenuItem nama="WISATA KULINER" foto={require('../../../assets/icon/restaurant.png')} />
            <MenuItem nama="HOTEL" foto={require('../../../assets/icon/hotel.png')} />
            <MenuItem nama="KERAJINAN" foto={require('../../../assets/icon/kerajinan.png')} />
        </View>
    )
}

export default MenuFuture