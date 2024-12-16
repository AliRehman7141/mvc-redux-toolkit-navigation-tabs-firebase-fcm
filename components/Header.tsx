import React, { ReactNode } from 'react';
import { View, StyleSheet, Pressable, I18nManager } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import appColors from 'utils/appColors';
import { ArrowLeft } from 'assets/icons';
import { useInsets } from 'utils/appDimensions';
import { NavigationProp } from 'navigations/NavKeys';

import Typography from './Typography';

interface HeaderProps {
    title?: string;
    showArrow?: boolean;
    RightComponent?: () => ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
    const {
        title = "Back",
        showArrow = true,
        RightComponent
    } = props

    const isRTL = I18nManager.isRTL
    const navigation = useNavigation<NavigationProp>()
    const { statusBar } = useInsets()

    return (
        <View style={[styles.container, { paddingTop: statusBar }]}>
            <View style={styles.rowContainer}>
                {showArrow &&
                    <Pressable
                        style={[styles.leftIconContainer, isRTL ? {
                            transform: [{ rotateY: "180deg" }]
                        } : {}]}
                        onPress={() => navigation.goBack()}>
                        <ArrowLeft />
                    </Pressable>
                }
                <Typography
                    style={[styles.titleText, showArrow ? {} : { marginLeft: 16 }]}>
                    {`${title}`}
                </Typography>
                <View style={{ flex: 1 }} />
                {RightComponent ? <RightComponent /> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: appColors.border,
        backgroundColor: appColors.white,
    },
    leftIconContainer: {
        height: "100%",
        paddingHorizontal: 16,
        justifyContent: "center",
    },
    rowContainer: {
        height: 65,
        paddingRight: 16,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: appColors.bgColor,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "600",
    }
})

export default Header;
