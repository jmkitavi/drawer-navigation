import React, {Component} from 'react';
import { DrawerNavigator } from 'react-navigation';

import {routeConfigs, drawerNavigatorConfig} from './drawerNavigation';


const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);

export default App;
