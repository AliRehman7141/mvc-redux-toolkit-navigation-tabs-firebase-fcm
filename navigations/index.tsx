import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthStack from './stacks/AuthStack';
import HomeStack from './stacks/HomeStack';
import { navigationRef } from './RootNavigation';

import { RootState } from 'store/index';
import { StyleSheet, View } from 'react-native';

const MainStack = () => {

    const { userData } = useSelector((state: RootState) => state.session)


    return (
        <NavigationContainer
            ref={navigationRef}>
            {userData?.id ?
                <HomeStack />
                :
                <AuthStack />
            }
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    splashLogo: {
        width: 172,
        height: 172,
        resizeMode: 'contain'
    }
})

export default MainStack
