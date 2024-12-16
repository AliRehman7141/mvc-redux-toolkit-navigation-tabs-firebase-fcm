import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { deviceHeight } from 'utils/appDimensions';
import NavKeys, { NavigationProp } from 'navigations/NavKeys';

const useController = () => {

    const navigation = useNavigation<NavigationProp>()
    const animContainerY = useRef(new Animated.Value(0)).current;
    const animCorner = useRef(new Animated.Value(0)).current;
    const animLogoY = useRef(new Animated.Value(deviceHeight / 2)).current;
    const animSignup = useRef(new Animated.Value(deviceHeight * 1.5)).current;
    const animSingin = useRef(new Animated.Value(deviceHeight * 1.7)).current;

    useEffect(() => {
        startAnimation()
    }, []);

    const startAnimation = () => {
        Animated.parallel([
            Animated.timing(animContainerY, { toValue: -deviceHeight / 2, duration: 1000, useNativeDriver: true }),
            Animated.timing(animCorner, { toValue: 30, duration: 1000, useNativeDriver: true }),
            Animated.timing(animLogoY, { toValue: deviceHeight / 4, duration: 1000, useNativeDriver: true }),
            Animated.timing(animSignup, { toValue: 0, duration: 1300, useNativeDriver: true }),
            Animated.timing(animSingin, { toValue: 0, duration: 1500, useNativeDriver: true })
        ]).start();
    }

    const onSignupPress = () => {
        navigation.navigate(NavKeys.SinginSignupScreen, {})
    }

    const onSigninPress = () => {
        navigation.navigate(NavKeys.SinginSignupScreen, { hasAccountParam: true })
    }

    return {
        animContainerY,
        animCorner,
        animLogoY,
        animSignup,
        animSingin,

        onSignupPress,
        onSigninPress,
    }
};

export default useController;
