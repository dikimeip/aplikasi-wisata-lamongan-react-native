import React, { Component } from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import FootBar from '../../organisms/FootBar'
import TentangMenu from '../../organisms/TentangMenu'

class TentangPage extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <TentangMenu/>
                <FootBar/>
            </View>
        )
    }
}

export default TentangPage
