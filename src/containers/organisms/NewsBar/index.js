import React, { Component } from 'react';
import { ScrollView, View ,FlatList} from 'react-native';
import NewsItem from '../../../components/moleculs/NewsItem';
import Axios from 'axios'

class NewsBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            prefik_url :"http://192.168.43.230/api_pariwisata/img/",
            wisata : []
        }
    }

    componentDidMount = () => {
        Axios.get("http://192.168.43.230/api_pariwisata/berita.php").then(res => {
            this.setState({
                wisata: res.data.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <NewsItem nama={item.judul_berita} foto={{ uri: this.state.prefik_url + item.foto1 }} />
    )
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.wisata}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

}

export default NewsBar