import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import ImageSlider from '../../organisms/ImageSlider';
import MenuFuture from '../../organisms/MenuFuture';
import WisataMenu from '../../organisms/WisataMenu';

class homePage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* menu konten */}
                <View style={{ flex: 1, marginHorizontal: 15, }}>
                    <ScrollView>
                        {/* Image Slider */}
                        <ImageSlider/>
                        {/* menu fiture */}
                        <MenuFuture/>
                        {/* Wisata Alam */}
                        <WisataMenu/>
                        {/* Halaman Wisata Buatan */}
                        <View style={{ height: 210, marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'grey' }}>WISATA BUATAN</Text>
                            <ScrollView horizontal>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                                            <Image source={require('../../../assets/foto/m1.jpg')} style={{ width: '100%', height: '100%', }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Kutang</Text>
                                    </View>
                                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                                            <Image source={require('../../../assets/foto/m2.jpg')} style={{ width: '100%', height: '100%', }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Klayar</Text>
                                    </View>
                                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                                            <Image source={require('../../../assets/foto/m3.jpg')} style={{ width: '100%', height: '100%', }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Cemara</Text>
                                    </View>
                                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                                            <Image source={require('../../../assets/foto/m4.jpg')} style={{ width: '100%', height: '100%', }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Kute</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        {/* Wisata Budaya */}
                        <View style={{ height: 210, marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'grey' }}>WISATA BUDAYA</Text>
                            <ScrollView horizontal>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                                            <Image source={require('../../../assets/foto/m1.jpg')} style={{ width: '100%', height: '100%', }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Kutang</Text>
                                    </View>
                                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                                            <Image source={require('../../../assets/foto/m2.jpg')} style={{ width: '100%', height: '100%', }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Klayar</Text>
                                    </View>
                                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                                            <Image source={require('../../../assets/foto/m3.jpg')} style={{ width: '100%', height: '100%', }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Cemara</Text>
                                    </View>
                                    <View style={{ width: 150, margin: 10, height: 150, borderWidth: 1, borderColor: 'grey', }}>
                                        <View style={{ height: 100, backgroundColor: 'pink' }}>
                                            <Image source={require('../../../assets/foto/m4.jpg')} style={{ width: '100%', height: '100%', }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Pantai Kute</Text>
                                    </View>
                                </View>
                            </ScrollView>
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
                            <View style={{ width: 26, height: 26 ,marginHorizontal: 25 }}>
                                <Image source={require('../../../assets/icon/report.png')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>PENGADUAN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('tentangPages')}>
                            <View style={{ width: 26, height: 26,marginHorizontal: 20, }}>
                                <Image source={require('../../../assets/icon/contact.png')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>TENTANG</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
}

export default homePage
