import { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import appColors from "utils/appColors";
import { ORDER_STATUS } from "utils/appEnums";
import { Button, Typography } from "components/index";

import { placeHolderFunction } from "utils/index";
import { DeliveryOrder } from "utils/appModels";
import { DeliveryIcon, DeliveryStatusIcon, ParcelIcon, ParcelSizeIcon, PickupIcon, TelephoneContactsIcon } from "assets/images";
import { onPhoneNumberPress } from "utils/appHelper";

interface OrderCardProps {
    item: DeliveryOrder;
    handleCancelOrder?: (orderId?: number) => void;
    onOrderPress?: (orderId?: number) => void;
}

const OrderCard: FC<OrderCardProps> = (props) => {
    const {
        item,
        handleCancelOrder = placeHolderFunction,
        onOrderPress = placeHolderFunction,
    } = props
    let orderStatus = item.status?.toUpperCase()
    let orderStatusColor = appColors.pending
    if (orderStatus === ORDER_STATUS.CANCELLED) {
        orderStatusColor = appColors.cancelled
    } else if (orderStatus === ORDER_STATUS.DELIVERED) {
        orderStatusColor = appColors.delivered
    } else if (orderStatus === ORDER_STATUS.SHIPPED) {
        orderStatusColor = appColors.shipped
    } else if (orderStatus === ORDER_STATUS.ON_ROUTE) {
        orderStatusColor = appColors.onRoute
    } else if (orderStatus === ORDER_STATUS.IN_PROGRESS) {
        orderStatusColor = appColors.inProgress
    }

    return (
        <Pressable
            style={styles.orderCard}
            onPress={() => onOrderPress(item.id)}>
            <View style={styles.rowWrap}>
                <View style={styles.itemRow}>
                    <Image
                        source={DeliveryStatusIcon}
                        style={styles.iconStyle}
                    />
                    <Typography style={{ color: orderStatusColor, fontWeight: 500 }}>
                        {orderStatus}
                    </Typography>
                </View>
                {item.package_size ?
                    <View style={styles.itemRow}>
                        <Image
                            source={ParcelSizeIcon}
                            style={styles.iconStyle}
                        />
                        <Typography style={{ fontWeight: 500 }}>
                            {item.package_size.toUpperCase()}
                        </Typography>
                    </View> : null
                }
                {item.package_weight ?
                    <View style={styles.itemRow}>
                        <Image
                            source={ParcelIcon}
                            style={[styles.iconStyle, { height: 20 }]}
                        />
                        <Typography>
                            {item.package_weight} {item.weight_metric}
                        </Typography>
                        {item.number_of_items ?
                            <Typography>{` x ${item.number_of_items} ${item.number_of_items == 1 ? "item" : "items"}`}</Typography> : null}
                    </View> : null
                }
                {item.phone_number ?
                    <Pressable style={styles.itemRow}
                        onPress={() => onPhoneNumberPress(`+${item.mobile_key}${item.phone_number}`)}>
                        <Image
                            source={TelephoneContactsIcon}
                            style={styles.iconStyle}
                        />
                        <Typography style={{ color: appColors.primary }}>
                            {`+${item.mobile_key}${item.phone_number}`}
                        </Typography>
                    </Pressable> : null
                }
            </View>
            <View style={styles.itemRow}>
                <Image
                    source={PickupIcon}
                    style={styles.iconStyle}
                />
                <View style={{ flex: 1 }}>
                    <Typography style={{ fontWeight: 600 }}>
                        {"From: "}
                        <Typography>
                            {item.pickup_address}, {item.pickup_city}
                        </Typography>
                    </Typography>
                </View>
            </View>
            <View style={styles.itemRow}>
                <Image
                    source={DeliveryIcon}
                    style={styles.iconStyle}
                />
                <View style={{ flex: 1 }}>
                    <Typography style={{ fontWeight: 600 }}>
                        {"To: "}
                        <Typography>
                            {item.delivery_address}, {item.delivery_city}
                        </Typography>
                    </Typography>
                </View>
            </View>
            <View style={styles.row}>
                {orderStatus === ORDER_STATUS.PENDING && (
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Button
                            title="Cancel Order"
                            container={{ flex: 1, backgroundColor: appColors.cancelled }}
                            onPress={() => handleCancelOrder(item?.id)}
                        />
                    </View>
                )}
                <View style={{ flex: 1 }}>
                    <Button
                        title="Open Details"
                        onPress={() => onOrderPress(item?.id)}
                    />
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    orderCard: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
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
    orderTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
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

export default OrderCard