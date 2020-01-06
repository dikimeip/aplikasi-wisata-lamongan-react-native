import React, { Component } from 'react';
import { ScrollView,View } from 'react-native';
import NewsItem from '../../../components/moleculs/NewsItem';

const NewsBar = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* berita content */}
            <ScrollView>
                <NewsItem nama="Dumy Foto" foto={require('../../../assets/foto/m1.jpg')} />
                <NewsItem nama="Dumy Foto" foto={require('../../../assets/foto/m1.jpg')} />
                <NewsItem nama="Dumy Foto" foto={require('../../../assets/foto/m1.jpg')} />
                <NewsItem nama="Dumy Foto" foto={require('../../../assets/foto/m1.jpg')} />
                <NewsItem nama="Dumy Foto" foto={require('../../../assets/foto/m1.jpg')} />
            </ScrollView>
        </View>
    )
}

export default NewsBar