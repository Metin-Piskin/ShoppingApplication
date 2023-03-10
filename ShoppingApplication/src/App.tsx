import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

import Login from "./Pages/Auth/Login";
import SignIn from "./Pages/Auth/SignIn";

import Home from "./Pages/Home";
import Categori from "./Pages/Categori";
import Detail from "./Pages/Detail";

import Search from './Pages/Search';
import Favorites from './Pages/Favorites';
import Basket from './Pages/Basket';

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  )
}

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#232F34' }
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="home" size={25} color={"#F9AA33"} />
            }
            return <Ionicons name="home-outline" size={25} color={"#FFF"} />
          }
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="search" size={25} color={"#F9AA33"} />
            }
            return <Ionicons name="search-outline" size={25} color={"#FFF"} />
          }
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <MaterialIcons name="favorite" size={25} color={"#F9AA33"} />
            }
            return <MaterialIcons name="favorite-border" size={25} color={"#FFF"} />
          }
        }}
      />
      <Tab.Screen
        name='Basket'
        component={Basket}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <FontAwesome5 name="shopping-basket" size={25} color={"#F9AA33"} />
            }
            return <FontAwesome5 name="shopping-basket" size={25} color={"#FFF"} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const Router = () => {
  const [userSession, setUserSession] = useState<FirebaseAuthTypes.User | boolean>();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    })
  }, []);

  return (
    <NavigationContainer>
      {
        !userSession ? (
          <Stack.Navigator>
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
              <Stack.Screen name="TabBar" component={TabBar} />
              <Stack.Screen name="Categori" component={Categori} />
              <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
          </>
        )
      }
    </NavigationContainer>
  )
}
export default Router;