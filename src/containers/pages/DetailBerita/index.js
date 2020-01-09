import React, { Component } from 'react'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import FootBar from '../../organisms/FootBar';
import Axios from 'axios'


class DetailBerita extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prefik_url: "http://192.168.43.230/api_pariwisata/img/",
            tanggal: "",
            author: "",
            judul: "",
            isi: "",
            foto: "",
            komentar: [],
        }
    }

    componentDidMount = () => {
        this.setState({
            tanggal: this.props.navigation.state.params.tanggal,
            author: this.props.navigation.state.params.author,
            judul: this.props.navigation.state.params.judul,
            isi: this.props.navigation.state.params.isi,
            foto: this.props.navigation.state.params.foto,
            // id: this.props.navigation.state.params.id,
        })
        const id = this.props.navigation.state.params.id
        Axios.get("http://192.168.43.230/api_pariwisata/show_komentar.php?id=" + id).then(res => {
            console.log(res.data.data)
            this.setState({
                komentar: res.data.data
            })
        }).catch(err => {
            console.log(err)
        })
        console.log(this.state.komentar)
    }

    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item }) => (
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.nama_komentar}</Text>
            <Text style={{ fontWeight: 'bold' }}>{item.email_komentar}</Text>
            <Text>{item.isi_komentar}</Text>
        </View>

    )

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
                    <View style={{marginTop:10}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 10 }}>Masukan Nama</Text>
                        <TextInput placeholder="Masukan Nama Anda" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20, }} onChangeText={input => this.setState({ nama: input })} value={this.state.nama} />
                    </View>
                </ScrollView>
                <View style={{ marginHorizontal: 20, marginTop: 0 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>KOMENTAR</Text>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.komentar}
                        renderItem={this.renderItem}
                    />
                </View>
                <FootBar />
            </View>
        )
    }
}
export default DetailBerita