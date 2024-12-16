import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "navigations/NavKeys";

type SinginSignupScreenProps = {
    route: RouteProp<RootStackParamList, 'SinginSignupScreen'>;
}

type SinginSignupScreenErrors = {
    name?: string;
    email?: string;
    general?: string;
    password?: string;
    confirmPassword?: string;
}

export type {
    SinginSignupScreenProps,
    SinginSignupScreenErrors
}