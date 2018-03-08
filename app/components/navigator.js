import React, { Component } from 'react'
import { DrawerItems, DrawerNavigator, TabNavigator, TabBarTop, TabBarBottom } from 'react-navigation';
import { Dimensions, ScrollView, Text, View} from 'react-native';

import Home from './Home/Home'
import Messi from './Players/Messi'
import Suarez from './Players/Suarez'
import Neymar from './Players/Neymar'
import Xavi from './Players/Xavi'
import Pique from './Players/Pique'

import Header from './common/Header/Header'
import SideMenu from './common/SideMenu/SideMenu'
import TabComponent from './Navigation/TabComponent'

let { height, width } = Dimensions.get('window')


export const Tabs = TabNavigator(
  {
    Messi: { screen: Messi },
    Suarez: { screen: Suarez },
    Neymar: { screen: Neymar },
  },
  {
    tabBarPosition: 'top',
    tabBarComponent: TabComponent,
    lazyLoad: true,
    style: {
      marginTop: -40
    },
    tabBarOptions: {
      height: 20,
      scrollEnabled: true,
      inactiveTintColor: 'black',
      activeTintColor: 'blue',
    },
    swipeEnabled: true,
    animationEnabled: false
  }
)


export const Drawer = DrawerNavigator(
  {
    Strikers: { screen: Tabs },
    Xavi: { screen: Xavi },
    Pique: { screen: Pique }
  },
  {
    drawerWidth: width/1.3 ,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
      activeTintColor: 'red',
    },
    contentComponent: SideMenu
  }
)