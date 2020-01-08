import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import WisataItem from '../../../components/moleculs/WisataItem';
import Axios from 'axios'

class WisataBudayaMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            prefik_url :"http://192.168.43.230/api_pariwisata/img/",
            wisata : []
        }
    }

    componentDidMount = () => {
        Axios.get("http://192.168.43.230/api_pariwisata/show_wisatabudaya.php").then(res => {
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
            <View style={{ height: 210, marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'grey' }}>WISATA BUDAYA</Text>
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

export default WisataBudayaMenu