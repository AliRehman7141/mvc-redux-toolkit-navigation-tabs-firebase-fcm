import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "navigations/NavKeys";

type HomeScreenProps = {
    route: RouteProp<RootStackParamList, 'HomeScreen'>;
}

export type {
    HomeScreenProps,
}