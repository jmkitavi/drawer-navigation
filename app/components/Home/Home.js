import React, {Component} from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Header from '../common/Header/Header';
import styles from './styles/styles';

class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Header {...this.props}/>
      <ImageBackground
        source={require('../../../images/barca.jpg')}
        style={styles.imageBackground}>
          <View style={styles.content}>
            <Text style={styles.text}>WELCOME</Text>
          </View>
      </ImageBackground>
      </View>
    );
  }
}

export default Home;