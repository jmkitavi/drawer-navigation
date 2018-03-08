import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native'

import Header from '../common/Header/Header'
import styles from './styles/styles';

const { width } = Dimensions.get('window')

export default class TabComponent extends Component {
  render() {
    const navigation = this.props.navigation;
    const { routes, index } = this.props.navigationState;
    console.log('this', this)
    return (
      <View>
        <Header {...this.props}/>
        <ScrollView
          style={styles.tabContainer}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          >
          {routes.map((route, idx) => {
            console.log('route', route)
            const color = index === idx ? this.props.activeTintColor : this.props.inactiveTintColor;
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(route.routeName);
                }}
                style={styles.tab}
                key={route.routeName}
              >
                <Text style={{ color }}>
                  {route.routeName}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      
    );
  }
}
