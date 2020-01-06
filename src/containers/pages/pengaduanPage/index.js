import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import PengaduanMenu from '../../organisms/PengaduanMenu'
import FootBar from '../../organisms/FootBar'

class pengaduanPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <PengaduanMenu />
                <FootBar />
            </View>
        )
    }
}

export default pengaduanPage