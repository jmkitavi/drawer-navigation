import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 48,
    backgroundColor: 'grey',
    margin: 'auto'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderWidth: 0,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: 'white',
    width: 80,
  },
})

export default styles