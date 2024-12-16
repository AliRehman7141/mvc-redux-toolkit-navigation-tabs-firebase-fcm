import { useEffect, useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import NotificationPopup from "react-native-push-notification-popup";

import { NotificationIcon } from "assets/images"

const useFirebaseMessaging = () => {
    const popupRef = useRef<NotificationPopup>(null)

    const requestUserPermission = useCallback(async () => {
        try {
            const authStatus = await messaging().requestPermission();
            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;

            if (enabled) {
                console.log('Authorization status:', authStatus);
                return await getFcmToken();
            } else {
                Alert.alert('Push Notification Permission', 'Permission denied');
                return "";
            }
        } catch (error) {
            console.log('requestUserPermission-error', error);
            return "";
        }
    }, []);

    const getFcmToken = useCallback(async () => {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log('FCM Token:', fcmToken);
                return fcmToken; // Return the token
            } else {
                console.log('Failed to get FCM token');
                return null;
            }
        } catch (error) {
            console.error('Error getting FCM token:', error);
            return null;
        }
    }, []);

    useEffect(() => {
        const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
            const { notification } = remoteMessage
            showNotification(notification?.title ?? "", notification?.body ?? "")
        });

        const unsubscribeOnNotificationOpened = messaging().onNotificationOpenedApp(remoteMessage => {
            console.log('Notification opened from background:', remoteMessage.notification);
        });

        const checkInitialNotification = async () => {
            const remoteMessage = await messaging().getInitialNotification();
            if (remoteMessage) {
                console.log('Notification caused app to open from quit state:', remoteMessage.notification);
            }
        };

        checkInitialNotification();

        return () => {
            unsubscribeOnMessage();
            unsubscribeOnNotificationOpened();
        };
    }, []);

    const showNotification = (title: string, body: string) => {
        if (popupRef.current) {
            popupRef.current.show?.({
                onPress: () => { },
                appIconSource: NotificationIcon,
                appTitle: "Test App",
                timeText: "Now",
                title: title,
                body: body,
                slideOutTime: 5000,
            });
        }
    };


    return {
        popupRef,

        requestUserPermission,
        getFcmToken
    };
};

export default useFirebaseMessaging;
