import React, { useState, forwardRef } from 'react';
import {
    StyleSheet,
    ViewStyle,
    TextStyle,
    View,
    TextInput,
    TextInputProps,
    Pressable,
    StyleProp
} from 'react-native';
import appColors from 'utils/appColors';
import Typography from './Typography';
import { placeHolderFunction } from 'utils/index';
import { EyeClosed, EyeOpened } from 'assets/icons';

interface InputFieldProps extends TextInputProps {
    container?: ViewStyle;
    title?: string;
    preset?: string;
    description?: string;
    titleStyle?: TextStyle;
    inputStyle?: StyleProp<TextStyle>;
    descriptionStyle?: TextStyle;
    errorStyle?: TextStyle;
    isPassword?: boolean;
    editable?: boolean;
    isRequired?: boolean;
    onEyePress?: () => void;
    error?: string;
}

const InputField = forwardRef<TextInput, InputFieldProps>((props, ref) => {
    const {
        children,
        title = "",
        preset = "",
        description,
        titleStyle = {},
        descriptionStyle = {},
        errorStyle = {},
        container = {},
        inputStyle = {},
        isPassword = false,
        isRequired = false,
        secureTextEntry,
        onEyePress = placeHolderFunction,
        error = "",
        editable = true
    } = props

    const [isFocused, setIsFocused] = useState<boolean>(false)

    const hasError = error.length > 0

    let borderColor = appColors.stroke
    if (hasError) borderColor = appColors.error
    else if (isFocused) borderColor = appColors.primary

    const renderEyeIcon = () => {
        if (isPassword) {
            return (
                <Pressable
                    style={styles.iconContainer}
                    onPress={onEyePress}>
                    {secureTextEntry ? <EyeClosed /> : <EyeOpened />}
                </Pressable>
            )
        } return null
    }

    const renderError = () => {
        if (hasError) {
            return (
                <Typography style={[styles.errorText, errorStyle]}>
                    {`${error}`}
                </Typography>
            )
        }
    }

    const renderDescription = () => {
        if (description) {
            return (
                <Typography style={[styles.descriptionText, descriptionStyle]}>
                    {`${description}`}
                </Typography>
            )
        }
    }

    return (
        <View style={[styles.container, container]}>
            {title ?
                <Typography style={[styles.titleText, titleStyle]}>
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
            <View style={[styles.contentContainer, { borderColor }]}>
                {preset ?
                    <Typography style={[styles.presetText, inputStyle]}>
                        {`${preset}`}
                    </Typography> : null
                }
                <TextInput
                    ref={ref}
                    key={`${title}`}
                    style={[styles.inputText, editable ? {} : { color: appColors.darkGray }, inputStyle]}
                    placeholderTextColor={appColors.placeholderTextColor}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                {renderEyeIcon()}
            </View>
            {renderError()}
            {renderDescription()}
            {children}
        </View>
    );
});

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
    },
    titleText: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '500',
        color: appColors.black
    },
    descriptionText: {
        fontSize: 10,
        marginTop: 9,
        lineHeight: 12,
        fontWeight: '500',
        color: appColors.gray
    },
    errorText: {
        fontSize: 10,
        marginTop: 9,
        lineHeight: 12,
        fontWeight: '400',
        color: appColors.error
    },
    presetText: {
        fontSize: 14,
        marginLeft: 12,
        fontWeight: '400',
    },
    inputText: {
        flex: 1,
        width: '100%',
        padding: 12,
        fontSize: 14,
        fontWeight: '400',
    },
    iconContainer: {
        width: 40,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default InputField;
