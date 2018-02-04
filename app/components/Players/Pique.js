import React, {Component} from 'react';
import { Text, View, Image, ImageBackground} from 'react-native';
import Header from '../common/Header/Header';
import styles from './styles/styles';

class Pique extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Header {...this.props}/>
        <ImageBackground
            source={require('../../../images/playerback.jpg')}
            style={{width: '100%', height: '100%'}}>
        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../../images/pique.png')}
        />
        </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Pique;