import { Alert, Linking } from "react-native";
import { VALID_EMAIL_REGEX } from "./appConstants";
import { DeliveryOrder } from "./appModels";

const isEmailValid = (email: string) => {
    return VALID_EMAIL_REGEX.test(String(email).toLowerCase());
};

const keyExtractor = (item: any, index: number) => {
    return `key-${item?.id}-${index}`
}

const formatTitle = (key: string): string => {
    return key.replace(/_/g, " ").toUpperCase()
}

const onPhoneNumberPress = (phoneNumber?: string) => {
    const phoneUrl = `tel:${phoneNumber}`;
    handleOpenLinking(phoneUrl, "Dialer")
}

const onEmailPress = (order?: DeliveryOrder) => {
    const mailtoUrl = `mailto:${order?.email}?subject=${encodeURIComponent("Delivery Order")}&body=${encodeURIComponent(`Order Id: ${order?.id}`)}`;
    handleOpenLinking(mailtoUrl, "Mail")
}

const handleOpenLinking = (url: string, type?: "Dialer" | "Mail") => {
    Linking.canOpenURL(url)
        .then((supported) => {
            if (!supported) {
                Alert.alert('Error', `${type} app is not available on this device`);
            } else {
                return Linking.openURL(url);
            }
        })
        .catch((err) => console.error('Error opening mail app:', err));
}

export {
    formatTitle,
    isEmailValid,
    keyExtractor,
    onPhoneNumberPress,
    onEmailPress,
}