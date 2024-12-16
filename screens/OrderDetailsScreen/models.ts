import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "navigations/NavKeys";

type OrderDetailsScreenProps = {
    route: RouteProp<RootStackParamList, 'OrderDetailsScreen'>;
}

export type {
    OrderDetailsScreenProps,
}