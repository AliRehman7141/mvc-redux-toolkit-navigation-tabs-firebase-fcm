import { StyleSheet } from 'react-native'
import appColors from 'utils/appColors'
import { deviceHeight } from 'utils/appDimensions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: appColors.bgColor
    },
    splashContainer: {
        alignItems: "center",
        width: "100%",
        height: deviceHeight,
        overflow: "hidden"
    },
    splashBackground: {
        width: "100%",
        height: "100%",
        backgroundColor: appColors.primary
    },
    logoContainer: {
        alignSelf: "center",
        position: "absolute"
    },
    contentContainer: {
        width: "100%",
        bottom: 60,
        top: deviceHeight / 2,
        position: "absolute",
        alignItems: "center",
        paddingHorizontal: 16
    },
    animatedContainer: {
        flex: 1,
        paddingHorizontal: 27,
        justifyContent: "center",
        width: "100%",
    },
    heading: {
        fontSize: 26,
        fontWeight: "600",
        color: appColors.white,
        textAlign: "center"
    },
    descriptionText: {
        fontSize: 26,
        fontWeight: "600",
        lineHeight: 38,
        textAlign: "center"
    }
})

export default styles