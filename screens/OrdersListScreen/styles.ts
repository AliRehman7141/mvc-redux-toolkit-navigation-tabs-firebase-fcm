import { StyleSheet } from "react-native";
import appColors from "utils/appColors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.lightGray,
    },
    statsContainer: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: appColors.white,
        borderRadius: 8,
        shadowColor: appColors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    divider: {
        height: 1,
        width: "100%",
        marginVertical: 24,
        backgroundColor: appColors.dividerLine
    },
    statsHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    statsRow: {
        flexDirection: 'row',
    },
    statItem: {
        fontSize: 16,
        marginRight: 50
    },
    ordersHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    floatingButton: {
        right: 20,
        width: 44,
        bottom: 30,
        height: 44,
        elevation: 5,
        borderRadius: 5,
        shadowRadius: 3,
        shadowOpacity: 0.3,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: appColors.black,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: appColors.primary,
    }
});

export default styles