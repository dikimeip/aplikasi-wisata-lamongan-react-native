import React, { Component } from 'react'
import { View,} from 'react-native'
import NewsBar from '../../organisms/NewsBar'
import FootBar from '../../organisms/FootBar';


class beritaPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NewsBar/>
                {/* menu bawah */}
                <FootBar/>
            </View>
        )
    }
}

export default beritaPage