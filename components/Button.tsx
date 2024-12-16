import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
    TextStyle,
    ActivityIndicator
} from 'react-native';

import _ from 'lodash'
import appColors from 'utils/appColors';
import { placeHolderFunction } from 'utils/index';

interface ButtonProps {
    onPress?: () => void;
    container?: ViewStyle;
    title?: string;
    isPrimary?: boolean;
    titleStyle?: TextStyle;
    isActive?: boolean;
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    title = "",
    isPrimary = true,
    isLoading,
    onPress = placeHolderFunction,
    container = {},
    titleStyle = {},
    isActive = true,
}) => {
    const backgroundColor = isPrimary ? appColors.primaryButtonBg : appColors.secondaryButtonBg
    const textColor = isPrimary ? appColors.primaryButtonText : appColors.secondaryButtonText

    const opacity = isActive ? 1 : 0.3

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            disabled={!isActive || isLoading}
            style={[styles.button, { backgroundColor, opacity }, container]}>
            <Text style={[styles.buttonText, { color: textColor }, titleStyle]}>
                {`${title}`}
            </Text>
            {isLoading &&
                <ActivityIndicator style={{ marginLeft: 10 }} color={isPrimary ? appColors.white : appColors.primary} />
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 37,
        width: '100%',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '400',
    },
    iconContainer: {
        width: 20,
        height: 20,
        marginRight: 10
    }
});

export default Button;
