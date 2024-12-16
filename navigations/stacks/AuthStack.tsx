import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from 'screens/LandingScreen';
import SinginSignupScreen from 'screens/SinginSignupScreen';
import { RootStackParamList } from '../NavKeys';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="SinginSignupScreen" component={SinginSignupScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack
