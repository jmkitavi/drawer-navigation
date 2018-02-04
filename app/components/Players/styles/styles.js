import { StyleSheet, Platform, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageView: {
    justifyContent: 'center',
    height: height,
    width: width
  },
  image: {
    width: width/0.9,
    height: height,
  }
})

export default styles;
