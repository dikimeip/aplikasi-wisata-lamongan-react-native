import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Axios from 'axios'

class PengaduanMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            nama:'',
            email:'',
            isi:''
        }
    }

    insertStudent = () => {
       Axios.post("http://192.168.43.230/api_pariwisata/tambah_pengaduan.php",this.state).then(res => {
           alert(res.data.data)
           this.setState({
               nama:"",
               email:"",
               isi:""
           })
       }).catch(err => {
           console.log(err)
       })
    }

    

    render() {
        return (
            <View style={{ flex: 1, marginHorizontal: 10, }}>
                {/* judul form */}
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>FORM PENGADUAN</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}> DINAS PARIWISATA KABUPATEN LAMONGAN</Text>
                </View>
                {/* form input  */}
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 10 }}>Masukan Nama</Text>
                    <TextInput placeholder="Masukan Nama Anda" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20,}} onChangeText={input => this.setState({nama:input})} value={this.state.nama} />
                    <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 10 }}>Masukan Email</Text>
                    <TextInput placeholder="Masukan email Anda" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20, }}  onChangeText={input => this.setState({email:input})} value={this.state.email} />
                    <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 10 }}>Masukan Isi Pengaduan</Text>
                    <TextInput multiline={true} placeholder="Masukan pengaduan Anda" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20, height: 300, }} onChangeText={input => this.setState({isi:input})} value={this.state.isi} />
                    <TouchableOpacity onPress={this.insertStudent} style={{ backgroundColor: 'green', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 20, marginTop: 20, }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>KIRIM</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

export default PengaduanMenu
