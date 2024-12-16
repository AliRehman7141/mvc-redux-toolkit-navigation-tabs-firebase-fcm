import { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import appColors from "utils/appColors";
import { ORDER_STATUS } from "utils/appEnums";
import { Button, Typography } from "components/index";

import { placeHolderFunction } from "utils/index";
import { DeliveryOrder } from "utils/appModels";
import { DeliveryIcon, DeliveryStatusIcon, DeliveryTimeIcon, MailIcon, ParcelIcon, ParcelSizeIcon, PickupIcon, TelephoneContactsIcon, UserIcon } from "assets/images";
import moment from "moment";
import { onEmailPress, onPhoneNumberPress } from "utils/appHelper";

interface OrderCardProps {
    orderData?: DeliveryOrder;
    handleCancelOrder?: (orderId?: number) => void;
}

const OrderCard: FC<OrderCardProps> = (props) => {
    const {
        orderData,
        handleCancelOrder = placeHolderFunction,
    } = props
    let orderStatus = orderData?.status?.toUpperCase()
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
        <View style={styles.orderCard}>
            <View style={styles.itemRow}>
                <Image
                    source={DeliveryStatusIcon}
                    style={styles.iconStyle}
                />
                <Typography style={{ color: orderStatusColor, fontWeight: 500 }}>
                    {orderStatus}
                </Typography>
            </View>
            <View style={styles.itemRow}>
                <Image
                    source={UserIcon}
                    style={styles.iconStyle}
                />
                <Typography style={{ fontWeight: 600 }}>
                    {orderData?.name}
                </Typography>
            </View>
            <Pressable
                style={styles.itemRow}
                onPress={() => onEmailPress(orderData)}>
                <Image
                    source={MailIcon}
                    style={styles.iconStyle}
                />
                <Typography style={{ fontWeight: 600, color: appColors.primary }}>
                    {orderData?.email}
                </Typography>
            </Pressable>
            {orderData?.package_size ?
                <View style={styles.itemRow}>
                    <Image
                        source={ParcelSizeIcon}
                        style={styles.iconStyle}
                    />
                    <Typography style={{ fontWeight: 600 }}>
                        {orderData.package_size.toUpperCase()}
                    </Typography>
                </View> : null
            }
            {orderData?.package_weight ?
                <View style={styles.itemRow}>
                    <Image
                        source={ParcelIcon}
                        style={[styles.iconStyle, { height: 20 }]}
                    />
                    <Typography>
                        {orderData.package_weight} {orderData.weight_metric}
                    </Typography>
                    {orderData.number_of_items ?
                        <Typography>{` x ${orderData.number_of_items} ${orderData.number_of_items == 1 ? "orderData" : "items"}`}</Typography> : null}
                </View> : null
            }
            {orderData?.phone_number ?
                <Pressable
                    style={styles.itemRow}
                    onPress={() => onPhoneNumberPress(`+${orderData.mobile_key}${orderData.phone_number}`)}>
                    <Image
                        source={TelephoneContactsIcon}
                        style={styles.iconStyle}
                    />
                    <Typography style={{ color: appColors.primary }}>
                        {`+${orderData.mobile_key}${orderData.phone_number}`}
                    </Typography>
                </Pressable> : null
            }
            <View style={styles.itemRow}>
                <Image
                    source={DeliveryTimeIcon}
                    style={styles.iconStyle}
                />
                <View style={{ flex: 1 }}>
                    <Typography style={{ fontWeight: 600 }}>
                        {"Pickup at: "}
                        <Typography>
                            {moment(orderData?.delivery_time, "YYYY-MM-DD hh:mm:ss").format("YYYY-MM-DD LT")}
                        </Typography>
                    </Typography>
                </View>
            </View>
            <View style={styles.itemRow}>
                <Image
                    source={DeliveryTimeIcon}
                    style={styles.iconStyle}
                />
                <View style={{ flex: 1 }}>
                    <Typography style={{ fontWeight: 600 }}>
                        {"Delivery at: "}
                        <Typography>
                            {moment(orderData?.delivery_time, "YYYY-MM-DD hh:mm:ss").format("YYYY-MM-DD LT")}
                        </Typography>
                    </Typography>
                </View>
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
                            {orderData?.pickup_address}, {orderData?.pickup_city}
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
                            {orderData?.delivery_address}, {orderData?.delivery_city}
                        </Typography>
                    </Typography>
                </View>
            </View>
            <View style={{ flex: 1 }} />
            {orderStatus === ORDER_STATUS.PENDING && (
                <Button
                    title="Cancel Order"
                    container={{ marginTop: 10 }}
                    onPress={() => handleCancelOrder(orderData?.id)}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    orderCard: {
        flex: 1,
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
        marginTop: 15,
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