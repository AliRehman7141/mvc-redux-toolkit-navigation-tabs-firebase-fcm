import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    LandingScreen: undefined;
    SinginSignupScreen: { hasAccountParam?: boolean };
    BottomTabs: undefined;
    HomeScreen: undefined;
    ProfileScreen: undefined;
    CreateOrderScreen: undefined;
    OrdersListScreen: undefined;
    OrderDetailsScreen: { orderId: number };
};

const NavKeys = {
    LandingScreen: "SinginSignupScreen" as const,
    SinginSignupScreen: "SinginSignupScreen" as const,
    VerifyOTPScreen: "VerifyOTPScreen" as const,
    BottomTabs: "BottomTabs" as const,
    HomeScreen: "HomeScreen" as const,
    ProfileScreen: "ProfileScreen" as const,
    OrdersListScreen: "OrdersListScreen" as const,
    OrderDetailsScreen: "OrderDetailsScreen" as const,
    CreateOrderScreen: "CreateOrderScreen" as const,
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type {
    NavigationProp
}

export default NavKeys
