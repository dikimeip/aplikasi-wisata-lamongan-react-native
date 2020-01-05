import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image,TextInput } from 'react-native'

class pengaduanPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ flex: 1,marginHorizontal: 10, }}>
                    {/* judul form */}
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>FORM PENGADUAN</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}> DINAS PARIWISATA KABUPATEN LAMONGAN</Text>
                    </View>
                    {/* form input  */}
                    <View style={{marginTop:30}}>
                        <Text style={{fontWeight:'bold',fontSize:14,marginVertical:10}}>Masukan Nama</Text>
                        <TextInput placeholder="Masukan Nama Anda" style={{borderColor:'grey',borderWidth:1,borderRadius:20}} />
                        <Text style={{fontWeight:'bold',fontSize:14,marginVertical:10}}>Masukan Email</Text>
                        <TextInput placeholder="Masukan email Anda" style={{borderColor:'grey',borderWidth:1,borderRadius:20}} />
                        <Text style={{fontWeight:'bold',fontSize:14,marginVertical:10}}>Masukan Isi Pengaduan</Text>
                        <TextInput multiline={true} placeholder="Masukan pengaduan Anda" style={{borderColor:'grey',borderWidth:1,borderRadius:20,height:300,}} />
                        <TouchableOpacity style={{backgroundColor:'green',paddingVertical:15,paddingHorizontal: 15,borderRadius:20,marginTop: 20,}}>
                            <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center',color:'white'}}>KIRIM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', height: 70, flexDirection: 'row', }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomePages')}>
                            <View style={{ width: 26, height: 26, marginHorizontal: 20 }}>
                                <Image source={require('../../../assets/icon/kerajinan.png')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>DASBOARD</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('BeritaPages')}>
                            <View style={{ width: 26, height: 26, marginHorizontal: 10 }}>
                                <Image source={require('../../../assets/icon/news.png')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>BERITA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('pengaduanPages')}>
                            <View style={{ width: 26, height: 26, marginHorizontal: 25 }}>
                                <Image source={require('../../../assets/icon/report.png')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>PENGADUAN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View style={{ width: 26, height: 26 }}>
                                <Image source={require('../../../assets/icon/contact.png')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>TENTANG</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default pengaduanPage