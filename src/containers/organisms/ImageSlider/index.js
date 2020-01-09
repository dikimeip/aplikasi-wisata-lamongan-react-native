import React, { Component } from 'react';
import { View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../../../assets/foto/m1.jpg'),
                require('../../../assets/foto/m2.jpg'),
                require('../../../assets/foto/m3.jpg')
            ]
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: 'yellow', height: 200 }}>
                <SliderBox
                    images={this.state.images}
                    autoplay={true}
                />
            </View>
        )
    }
}

export default ImageSlider