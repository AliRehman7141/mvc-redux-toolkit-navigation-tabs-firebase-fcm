import React from 'react';
import { View, StyleSheet, TextStyle, Pressable, ViewStyle } from 'react-native';

import { placeHolderFunction } from 'utils/index';
import { RadioActive, RadioInactive } from 'assets/icons';

import Typography from './Typography';

interface RadioButtonsProps {
    label?: string;
    isSelected?: boolean;
    labelStyle?: TextStyle;
    onPress?: () => void;
    container?: ViewStyle;
}

const RadioButton: React.FC<RadioButtonsProps> = (props) => {
    const {
        label,
        isSelected,
        container = {},
        labelStyle = {},
        onPress = placeHolderFunction,
    } = props

    return (
        <Pressable
            style={[styles.radioButton, container]}
            onPress={onPress}>
            {isSelected ? <RadioActive /> : <RadioInactive />}
            {label ?
                <View style={styles.labelContainer}>
                    <Typography style={labelStyle}>
                        {`${label}`}
                    </Typography>
                </View> : null
            }
        </Pressable>
    )
};

const styles = StyleSheet.create({
    radioButton: {
        marginTop: 20,
        marginRight: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    labelContainer: {
        marginLeft: 8,
    }
});

export default RadioButton;
