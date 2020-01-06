import React, { Component } from 'react';
import { View } from 'react-native';
import Slideshow from 'react-native-image-slider-show';

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Wisata Pantai Palu',
                    caption: 'Caption 1',
                    url: require('../../../assets/foto/m1.jpg')
                },
                {
                    title: 'Wisata Pantai Jogja',
                    caption: 'Caption 2',
                    url: require('../../../assets/foto/m2.jpg')
                },
                {
                    title: 'Wisata Pantai Putih',
                    caption: 'Caption 3',
                    url: require('../../../assets/foto/m3.jpg')
                },
            ]
        }
    }

    componentWillMount () {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount () {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View style={{ backgroundColor: 'yellow', height: 200 }}>
                <Slideshow
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({ position })} />
            </View>
        )
    }
}

export default ImageSlider