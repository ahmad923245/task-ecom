import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Items from '../screens/Items';
import Reviews from '../screens/Reviews';
import About from '../screens/About';


function MyTabBar({ state, descriptors, navigation, position }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };


                return (
                    <Pressable
                        key={index}
                        // accessibilityRole="button"
                        // accessibilityState={isFocused ? { selected: true } : {}}
                        // accessibilityLabel={options.tabBarAccessibilityLabel}
                        // testID={options.tabBarTestID}
                        onPress={onPress}
                        // onLongPress={onLongPress}
                        style={{ flex: 1, padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', borderBottomWidth: state.index === index ? 1 : 0, borderBottomColor: state.index === index ? 'white' : 'red' }}
                    >
                        <Text style={{ color: 'white' }}>{label}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}



const Tab = createMaterialTopTabNavigator();

export default function TopBar() {
    return (
        <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}>
            <Tab.Screen name="Items" component={Items} />
            <Tab.Screen name="Reviews" component={Reviews} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>

    );
}
