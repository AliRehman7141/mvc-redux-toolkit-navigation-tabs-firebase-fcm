import React, { FC } from "react";
import {
    StyleSheet,
    Text,
    TextProps,
} from "react-native";

import appColors from "utils/appColors";
import { fontFamilies } from "assets/fonts";

const Typography: FC<TextProps> = (props) => {
    const {
        children,
        style = {},
        onPress
    } = props

    return (
        <Text allowFontScaling={false} style={[styles.textStyle, style]} onPress={onPress}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        fontWeight: "400",
        color: appColors.text,
        fontFamily: fontFamilies.MonaSans,
    },
});

export default Typography