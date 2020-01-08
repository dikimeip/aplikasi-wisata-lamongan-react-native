import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import FootBar from '../../organisms/FootBar';


class DetailBerita extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prefik_url: "http://192.168.43.230/api_pariwisata/img/",
            tanggal: "",
            author: "",
            judul: "",
            isi: "",
            foto: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            tanggal: this.props.navigation.state.params.tanggal,
            author: this.props.navigation.state.params.author,
            judul: this.props.navigation.state.params.judul,
            isi: this.props.navigation.state.params.isi,
            foto: this.props.navigation.state.params.foto,
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1, marginHorizontal: 20 }}>
                        <View style={{ height: 200 }}>
                            <Image source={{ uri: this.state.prefik_url + this.state.foto }} style={{ height: "100%", width: "100%" }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 20 }}>{this.state.judul}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginRight: 20, }}>{this.state.author}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{this.state.tanggal}</Text>
                        </View>
                        <Text style={{ fontSize: 15, marginTop: 10 }} >{this.state.isi}</Text>
                    </View>
                </ScrollView>
                <FootBar />
            </View>
        )
    }
}
export default DetailBerita