import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "navigations/NavKeys";

type OrdersListScreenProps = {
    route: RouteProp<RootStackParamList, 'OrdersListScreen'>;
}

export type {
    OrdersListScreenProps,
}