import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingScreen from '../screens/ListingScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Feed' 
        component={FeedNavigator} 
        options={{
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='home' color={color} size={size} />
        }}  
      />
      <Tab.Screen 
        name='ListingsEdit' 
        component={ListingEditScreen} 
        options={({ navigation }) => ({
          tabBarButton: () => <NewListingButton onPress={() => navigation.navigate('ListingsEdit')}/>,
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='plus-circle' color={color} size={size} />
        })}  
      />
      <Tab.Screen 
        name='Account' 
        component={AccountNavigator} 
        options={{
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='account' color={color} size={size} />
        }}  
      />
    </Tab.Navigator>
  )
}

export default AppNavigator;