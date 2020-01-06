import React, { Component } from 'react'
import { View } from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import ImageSlider from '../../organisms/ImageSlider';
import MenuFuture from '../../organisms/MenuFuture';
import WisataMenu from '../../organisms/WisataMenu';
import WisataBuatanMenu from '../../organisms/WisataBuatanMenu';
import WisataBudayaMenu from '../../organisms/WisataBudayaMenu';
import FootBar from '../../organisms/FootBar';

class homePage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* menu konten */}
                <View style={{ flex: 1, marginHorizontal: 15, }}>
                    <ScrollView>
                        {/* Image Slider */}
                        <ImageSlider />
                        {/* menu fiture */}
                        <MenuFuture />
                        {/* Wisata Alam */}
                        <WisataMenu />
                        {/* Halaman Wisata Buatan */}
                        <WisataBuatanMenu />
                        {/* Wisata Budaya */}
                        <WisataBudayaMenu />
                    </ScrollView>
                </View>
                {/* menu bawah */}
                <FootBar />
            </View>
        );
    };
}

export default homePage
