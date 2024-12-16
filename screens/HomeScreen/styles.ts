import { StyleSheet } from "react-native";
import appColors from "utils/appColors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.lightGray,
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 8,
    },
    row: {
        flexDirection: "row"
    }
});

export default styles