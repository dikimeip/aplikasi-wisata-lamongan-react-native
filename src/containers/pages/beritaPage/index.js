import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'

class beritaPage extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'blue', flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'green' }}></View>
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
                        <View style={{ width: 26, height: 26 }}>
                            <Image source={require('../../../assets/icon/report.png')} style={{ width: '100%', height: '100%' }} />
                        </View>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>PENGADUAN</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 26, height: 26 }}>
                            <Image source={require('../../../assets/icon/contact.png')} style={{ width: '100%', height: '100%' }} />
                        </View>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>TENTANG</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default beritaPage