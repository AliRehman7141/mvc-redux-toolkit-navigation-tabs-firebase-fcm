import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import appColors from "utils/appColors";
import { ORDER_STATUS } from "utils/appEnums";
import { SkeletonView, Typography } from "components/index";
import { deviceWidth } from "utils/appDimensions";

interface StatsCardProps {
    title: string;
    count?: number;
    isLoading?: boolean;
}

const StatsCard: FC<StatsCardProps> = (props) => {
    const {
        title,
        count = 0,
        isLoading = false,
    } = props

    let orderStatusColor = appColors.pending
    if (title === ORDER_STATUS.CANCELLED) {
        orderStatusColor = appColors.cancelled
    } else if (title === ORDER_STATUS.DELIVERED) {
        orderStatusColor = appColors.delivered
    } else if (title === ORDER_STATUS.SHIPPED) {
        orderStatusColor = appColors.shipped
    } else if (title === ORDER_STATUS.ON_ROUTE) {
        orderStatusColor = appColors.onRoute
    } else if (title === ORDER_STATUS.IN_PROGRESS) {
        orderStatusColor = appColors.inProgress
    }

    return (
        <View style={styles.statsContainer}>
            <Typography style={[styles.statsHeader, { color: orderStatusColor }]}>
                {`${title}`}
            </Typography>
            {isLoading ?
                <SkeletonView style={{ width: 60, height: 28 }} />
                :
                <Typography style={styles.statItem}>
                    {count ?? 0}
                </Typography>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    statsContainer: {
        marginTop: 16,
        borderRadius: 8,
        paddingVertical: 25,
        marginHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        width: (deviceWidth - 48) / 2,
        backgroundColor: appColors.white,

        shadowColor: appColors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    statsHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    statItem: {
        fontSize: 24,
    },
})

export default StatsCard