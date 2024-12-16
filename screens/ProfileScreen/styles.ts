import { StyleSheet } from "react-native";
import appColors from "utils/appColors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    headerView: {
        width: "100%",
    },
    contentContainer: {
        flexGrow: 1,
        paddingTop: 30,
        paddingHorizontal: 16,
    },
    userDetailsView: {
        height: 48,
        flexDirection: "row",
    },
    userImage: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    userDetails: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 3.5,
    },
    useNameText: {
        lineHeight: 24,
        fontWeight: "600",
    },
    divider: {
        height: 1,
        width: "100%",
        marginTop: 27,
        backgroundColor: appColors.border
    },
    logoutButton: {
        borderWidth: 1,
        borderColor: appColors.text,
        backgroundColor: appColors.white,
    },
    logoutText: {
        fontWeight: "600",
        color: appColors.text,
    }
});