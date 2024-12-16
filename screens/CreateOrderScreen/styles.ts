import { StyleSheet } from 'react-native'
import appColors from 'utils/appColors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.bgColor
    },
    contentContainer: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        marginBottom: 50
    },
    signInHeading: {
        fontSize: 24,
        fontWeight: "500",
        lineHeight: 34,
        color: appColors.black,
        textAlign: "center",
        marginTop: 32
    },
    title: {
        marginTop: 24,
        fontSize: 14,
        fontWeight: "500",
        textAlign: "left",
        color: appColors.black,
    },
    googleButton: {
        height: 42,
        marginTop: 22,
        backgroundColor: appColors.transparent,
        borderWidth: 1,
        borderColor: appColors.stroke
    },
    dividerBar: {
        flex: 1,
        height: 1,
        backgroundColor: appColors.stroke
    },
    hasAccountText: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 16,
        color: appColors.darkGray,
        textAlign: "center",
        marginTop: 8,
    },
    termAndPrivacy: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 16,
        color: appColors.darkGray,
        textAlign: "center"
    },
    ForgetPasswordBtn: {
        alignSelf: "flex-end",
        marginTop: 10,

    },
    forgetBtnTxt: {
        fontWeight: "600",
        color: appColors.primary
    },
    editEmail: {
        height: "100%",
        paddingLeft: 15,
        justifyContent: "center",
    },
    errorText: {
        marginTop: 9,
        fontSize: 10,
        lineHeight: 12,
        fontWeight: '400',
        textAlign: "left",
        alignSelf: "flex-start",
        color: appColors.error
    },
    packageSizeContainer: {
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
    }
})

export default styles