import React, { Component } from 'react'
import { View,Text,FlatList } from 'react-native'
import FootBar from '../../organisms/FootBar';
import Axios from 'axios'
import NewsItem from '../../../components/moleculs/NewsItem';

class ShowPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prefik_url: "http://192.168.43.230/api_pariwisata/img/",
            wisata : []
        }
    }

    componentDidMount = () => {
        const id =  this.props.navigation.state.params.menu
        Axios.get("http://192.168.43.230/api_pariwisata/get_wisata.php?id="+id).then(res =>{
            this.setState({
                wisata :res.data.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <NewsItem nama={item.nama_wisata} foto={{ uri: this.state.prefik_url + item.foto1 }} />
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, bacgroundColor: 'blue' }}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.wisata}
                    renderItem={this.renderItem}
                />
                </View>
                {/* menu bawah */}
                <FootBar />
            </View>
        )
    }
}

export default ShowPage