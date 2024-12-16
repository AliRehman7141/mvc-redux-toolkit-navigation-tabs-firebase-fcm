import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationPopup from 'react-native-push-notification-popup';

import NavKeys, { RootStackParamList } from '../NavKeys';

import BottomTabs from './BottomTabs';
import CreateOrderScreen from 'screens/CreateOrderScreen';
import OrderDetailsScreen from 'screens/OrderDetailsScreen';
import useFirebaseMessaging from 'api/useFirebaseMessaging';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {

    const { popupRef } = useFirebaseMessaging()

    return (
        <>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={NavKeys.BottomTabs}>
                <Stack.Screen name={NavKeys.BottomTabs} component={BottomTabs} />
                <Stack.Screen name={NavKeys.CreateOrderScreen} component={CreateOrderScreen} />
                <Stack.Screen name={NavKeys.OrderDetailsScreen} component={OrderDetailsScreen} />
            </Stack.Navigator>
            <NotificationPopup ref={popupRef} />
        </>
    );
}

export default HomeStack
