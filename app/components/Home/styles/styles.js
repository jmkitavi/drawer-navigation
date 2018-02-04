import { StyleSheet, Platform, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    marginTop: height / 6.5,
    fontWeight: 'bold',
    fontSize: 28,
    color: 'gold',
  }
})

export default styles;
