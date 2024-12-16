import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

import { SkeletonView, Typography } from "components/index";
import appColors from "utils/appColors";
import {
    DeliveryIcon,
    DeliveryStatusIcon,
    ParcelIcon,
    ParcelSizeIcon,
    PickupIcon,
    TelephoneContactsIcon
} from "assets/images";

const ReservationCard: FC = () => {

    return (
        <View style={styles.orderCard}>
            <View style={styles.rowWrap}>
                <View style={styles.itemRow}>
                    <Image
                        source={DeliveryStatusIcon}
                        style={styles.iconStyle}
                    />
                    <SkeletonView style={{ width: 120, height: 25 }} />
                </View>
                <View style={styles.itemRow}>
                    <Image
                        source={ParcelSizeIcon}
                        style={styles.iconStyle}
                    />
                    <SkeletonView style={{ width: 100, height: 25 }} />
                </View>
                <View style={styles.itemRow}>
                    <Image
                        source={ParcelIcon}
                        style={[styles.iconStyle, { height: 20 }]}
                    />
                    <SkeletonView style={{ width: 60, height: 25 }} />
                    <Typography>{` x `}</Typography>
                    <SkeletonView style={{ width: 40, height: 25 }} />
                </View>
                <View style={styles.itemRow}>
                    <Image
                        source={TelephoneContactsIcon}
                        style={styles.iconStyle}
                    />
                    <SkeletonView style={{ width: 110, height: 25 }} />
                </View>
            </View>
            <View style={styles.itemRow}>
                <Image
                    source={PickupIcon}
                    style={styles.iconStyle}
                />
                <SkeletonView style={{ width: 220, height: 25 }} />
            </View>
            <View style={styles.itemRow}>
                <Image
                    source={DeliveryIcon}
                    style={styles.iconStyle}
                />
                <SkeletonView style={{ width: 210, height: 25 }} />
            </View>
            <View style={styles.row}>
                <SkeletonView style={{ flex: 1, height: 35, borderRadius: 8 }} />
                <View style={{ width: 10 }} />
                <SkeletonView style={{ flex: 1, height: 35, borderRadius: 8 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    orderCard: {
        padding: 16,
        width: "100%",
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: appColors.white,

        shadowColor: appColors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    row: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row"
    },
    rowWrap: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    itemRow: {
        marginTop: 5,
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    iconStyle: {
        width: 25,
        height: 25,
        marginRight: 5,
        resizeMode: "contain",
    }
})

export default ReservationCard