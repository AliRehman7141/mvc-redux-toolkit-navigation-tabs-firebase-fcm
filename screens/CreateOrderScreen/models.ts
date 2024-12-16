import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "navigations/NavKeys";

type CreateOrderScreenProps = {
    route: RouteProp<RootStackParamList, 'CreateOrderScreen'>;
}

type CreateOrderScreenErrors = {
    name?: string;
    email?: string;
    general?: string;
    pickupTime?: string;
    pickupCity?: string;
    pickupAddress?: string;
    deliverTime?: string;
    deliverCity?: string;
    deliverAddress?: string;
}

export type {
    CreateOrderScreenProps,
    CreateOrderScreenErrors
}