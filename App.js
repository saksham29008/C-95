import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator} from ""
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./screens/Feed";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    } />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

