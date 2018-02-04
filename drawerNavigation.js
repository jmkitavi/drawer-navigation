import React from 'react'
import { DrawerItems } from 'react-navigation';
import { Dimensions, ScrollView, Text} from 'react-native';

import Home from './app/components/Home/Home'
import Messi from './app/components/Players/Messi'
import Suarez from './app/components/Players/Suarez'
import Xavi from './app/components/Players/Xavi'
import Pique from './app/components/Players/Pique'

import SideMenu from './app/components/common/SideMenu/SideMenu'

let { height, width } = Dimensions.get('window')

export const routeConfigs = {
  Home: {
    screen: Home
  },
  Messi: {
    screen: Messi
  },
  Suarez: {
    screen: Suarez
  },
  Xavi: {
    screen: Xavi
  },
  Pique: {
    screen: Pique
  }
};

export const drawerNavigatorConfig = {
  initialRouteName: 'Home',
  drawerWidth: width/1.3 ,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOptions: {
    activeTintColor: 'red',
  },
  contentComponent: SideMenu
};