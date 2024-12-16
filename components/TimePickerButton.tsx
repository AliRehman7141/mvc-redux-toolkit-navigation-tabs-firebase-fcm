import React, { useState } from 'react';
import {
    StyleSheet,
    ViewStyle,
    View,
    TextInputProps,
    Pressable,
} from 'react-native';
import appColors from 'utils/appColors';
import Typography from './Typography';
import { placeHolderFunction } from 'utils/index';

interface TimePickerButtonProps extends TextInputProps {
    container?: ViewStyle;
    title?: string;
    value?: string;
    placeholder: string;
    isRequired?: boolean;
    onPress?: () => void;
}

const TimePickerButton: React.FC<TimePickerButtonProps> = (props) => {
    const {
        title = "",
        value,
        placeholder = "",
        container = {},
        isRequired = false,
        onPress = placeHolderFunction,
    } = props

    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, container]}>
            {title ?
                <Typography style={[styles.titleText]}>
                    {`${title}`}
                    {isRequired ?
                        <Typography style={[styles.titleText, {
                            color: appColors.danger,
                        }]}>
                            {" *"}
                        </Typography> : null
                    }
                </Typography> : null
            }
            <View style={styles.contentContainer}>
                {value ?
                    <Typography style={[styles.presetText]}>
                        {`${value}`}
                    </Typography> :
                    <Typography style={[styles.presetText, { color: appColors.placeholderTextColor }]}>
                        {`${placeholder}`}
                    </Typography>
                }
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
    },
    contentContainer: {
        marginTop: 8,
        alignItems: "center",
        flexDirection: "row",
        height: 42,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: appColors.stroke
    },
    titleText: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '500',
        color: appColors.black
    },
    presetText: {
        fontSize: 14,
        marginLeft: 12,
        fontWeight: '400',
    },
});

export default TimePickerButton;
