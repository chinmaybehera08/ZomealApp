import React from 'react';
import { View, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function MyComponent() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Vegiterian"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Vegiterian',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="leaf" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Non-Vegiterian"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Non-Vegiterian',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="leaf-off" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Eggiterian"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Eggiterian',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="alpha-e-circle" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Jain Food"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Jain Food',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="alpha-j-circle" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});