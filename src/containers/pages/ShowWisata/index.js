import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import FootBar from '../../organisms/FootBar';


class ShowWisata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prefik_url: "http://192.168.43.230/api_pariwisata/img/",
            nama: "",
            tanggal: "",
            daya: "",
            fasilitas: "",
            akses: "",
            map: "",
            foto: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            nama: this.props.navigation.state.params.nama,
            tanggal: this.props.navigation.state.params.tanggal,
            daya: this.props.navigation.state.params.daya,
            fasilitas: this.props.navigation.state.params.fasilitas,
            akses: this.props.navigation.state.params.akses,
            map: this.props.navigation.state.params.map,
            foto: this.props.navigation.state.params.foto,
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, marginHorizontal: 20 }}>
                    <ScrollView>
                        <View style={{ height: 200 }}>
                            <Image source={{ uri: this.state.prefik_url + this.state.foto }} style={{ height: "100%", width: "100%" }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 20 }}>{this.state.nama}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{this.state.tanggal}</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>DAYA TARIK</Text>
                        <Text style={{ fontSize: 15, marginTop: 10 }} >{this.state.daya}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>FASILITAS</Text>
                        <Text style={{ fontSize: 15, marginTop: 10 }} >{this.state.fasilitas}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>AKSES</Text>
                        <Text style={{ fontSize: 15, marginTop: 10 }} >{this.state.akses}</Text>
                    </ScrollView>
                </View>
                <FootBar />
            </View>
        )
    }
}

export default ShowWisata