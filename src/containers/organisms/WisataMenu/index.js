import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import WisataItem from '../../../components/moleculs/WisataItem'
import Axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'

class WisataMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prefik_url: "http://192.168.43.230/api_pariwisata/img/",
            wisata: []
        }
    }

    componentDidMount = () => {
        Axios.get("http://192.168.43.230/api_pariwisata/show_wisataalam.php").then(res => {
            this.setState({
                wisata: res.data.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <WisataItem nama={item.nama_wisata} foto={{ uri: this.state.prefik_url + item.foto1 }} />
    )

    render() {
        return (
            <View style={{ height: 210, marginTop: 60 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'grey' }}>WISATA ALAM</Text>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.wisata}
                    renderItem={this.renderItem}
                    horizontal={true}
                />
            </View>
        )
    }

}

export default WisataMenu
