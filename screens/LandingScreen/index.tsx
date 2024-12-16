
import React from 'react';
import {
    View,
    Animated,
    Text,
} from 'react-native';

import styles from './styles';
import useController from './useController';

import { Button, Typography } from 'components/index';
import { LandingScreenProps } from './models';

const LandingScreen: React.FC<LandingScreenProps> = (props) => {
    const {
        animContainerY,
        animCorner,
        animLogoY,
        animSignup,
        animSingin,

        onSignupPress,
        onSigninPress,
    } = useController()

    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.splashContainer, {
                    transform: [{ translateY: animContainerY }],
                    borderRadius: animCorner
                }]}>
                <View style={styles.splashBackground} />
            </Animated.View>
            <Animated.View
                style={[styles.logoContainer, {
                    transform: [{ translateY: animLogoY }]
                }]}>
                <Typography style={styles.heading}>
                    {"Test App"}
                </Typography>
            </Animated.View>
            <View style={styles.contentContainer}>
                <Animated.View
                    style={[styles.animatedContainer, {
                        transform: [{ translateY: animSignup }]
                    }]}>
                    <Text style={styles.descriptionText}>
                        {`Welcome to test app.`}
                    </Text>
                </Animated.View>
                <Animated.View style={{ width: "100%", transform: [{ translateY: animSignup }] }}>
                    <Button
                        title={'Sign up'}
                        titleStyle={{ lineHeight: 16.94 }}
                        onPress={onSignupPress}
                    />
                </Animated.View>
                <Animated.View style={{ width: "100%", transform: [{ translateY: animSingin }] }}>
                    <Button
                        title={'Sign in'}
                        isPrimary={false}
                        onPress={onSigninPress}
                    />
                </Animated.View>
            </View>
        </View>
    );
};

export default LandingScreen;
