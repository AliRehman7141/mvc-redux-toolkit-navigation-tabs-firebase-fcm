import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles';
import { RootStackParamList } from '../NavKeys';

import {
    HomeActive,
    HomeInactive,
    OrdersActive,
    OrdersInactive,
    UserIconActive,
    UserIconInActive,
} from 'assets/icons';
import { BOTTOM_TAB_BAR_HEIGHT, useInsets } from 'utils/appDimensions';

import HomeScreen from 'screens/HomeScreen';
import ProfileScreen from 'screens/ProfileScreen';
import OrdersListScreen from 'screens/OrdersListScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabs = () => {

    const { bottomTab } = useInsets()

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    ...styles.tabBarStyle,
                    height: BOTTOM_TAB_BAR_HEIGHT + bottomTab,
                },
                headerShown: false,
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused }) => (
                        focused ? <HomeActive /> : <HomeInactive />
                    ),
                }}
            />
            <Tab.Screen
                name="OrdersListScreen"
                component={OrdersListScreen}
                options={{
                    tabBarLabel: "Orders",
                    tabBarIcon: ({ focused }) => (
                        focused ? <OrdersActive /> : <OrdersInactive />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ focused }) => (
                        focused ? <UserIconActive /> : <UserIconInActive />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs
