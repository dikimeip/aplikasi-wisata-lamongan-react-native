import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'

class beritaPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* berita content */}
                    <ScrollView>
                        <View style={{ height: 150, margin: 15, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey' }}>
                            <View style={{ flex: 1 }}>
                                <Image source={require('../../../assets/foto/m1.jpg')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 10, }}>PERESMIAN TEMPAT WISATA BARU DI DAERAH SUKORAME LAMONGAN</Text>
                        </View>
                        <View style={{ height: 150, margin: 15, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey' }}>
                            <View style={{ flex: 1 }}>
                                <Image source={require('../../../assets/foto/m1.jpg')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 10, }}>PERESMIAN TEMPAT WISATA BARU DI DAERAH SUKORAME LAMONGAN</Text>
                        </View>
                        <View style={{ height: 150, margin: 15, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey' }}>
                            <View style={{ flex: 1 }}>
                                <Image source={require('../../../assets/foto/m1.jpg')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 10, }}>PERESMIAN TEMPAT WISATA BARU DI DAERAH SUKORAME LAMONGAN</Text>
                        </View>
                        <View style={{ height: 150, margin: 15, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey' }}>
                            <View style={{ flex: 1 }}>
                                <Image source={require('../../../assets/foto/m1.jpg')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 10, }}>PERESMIAN TEMPAT WISATA BARU DI DAERAH SUKORAME LAMONGAN</Text>
                        </View>
                        <View style={{ height: 150, margin: 15, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey' }}>
                            <View style={{ flex: 1 }}>
                                <Image source={require('../../../assets/foto/m1.jpg')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 10, }}>PERESMIAN TEMPAT WISATA BARU DI DAERAH SUKORAME LAMONGAN</Text>
                        </View>
                        <View style={{ height: 150, margin: 15, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey' }}>
                            <View style={{ flex: 1 }}>
                                <Image source={require('../../../assets/foto/m1.jpg')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 10, }}>PERESMIAN TEMPAT WISATA BARU DI DAERAH SUKORAME LAMONGAN</Text>
                        </View>
                    </ScrollView>
                </View>
                {/* menu bawah */}
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
                            <View style={{ width: 26, height: 26,marginHorizontal: 25 }}>
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

export default beritaPage