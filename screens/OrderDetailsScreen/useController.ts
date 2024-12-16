import { useDispatch } from 'react-redux';

import { AppDispatch } from 'store/index';
import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { cancelOrderRequest, getOrderDataRequest, getOrdersRequest, getStatsRequest } from 'store/reducers/ordersSlice';
import { showSuccessMsg } from 'utils/appMessages';
import { DeliveryOrder } from 'utils/appModels';

const useController = ({ orderId }: { orderId: number }) => {

    const dispatch = useDispatch<AppDispatch>()

    const [orderData, setOrderData] = useState<DeliveryOrder>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

    useEffect(() => {
        getHomeData()
    }, [])

    const getHomeData = async () => {
        const resultAction = await dispatch(getOrderDataRequest(orderId))
        if (getOrderDataRequest.fulfilled.match(resultAction)) {
            setOrderData(resultAction.payload.order)
        }
        setIsLoading(false)
        setIsRefreshing(false)
    }

    const getRefreshData = async () => {
        setIsRefreshing(true)
        getHomeData()
    }

    const handleCancelOrder = (orderId?: number) => {
        Alert.alert(
            "Cancel Order",
            `Are you sure you want to cancel order ${orderId}?`,
            [
                { text: "No", style: "cancel" },
                {
                    text: "Yes", onPress: () => {
                        onCancelOrderConfirm(orderId)
                    }
                },
            ]
        );
    };

    const onCancelOrderConfirm = async (orderId?: number) => {
        if (orderId) {
            setIsLoading(true)
            const resultAction = await dispatch(cancelOrderRequest(orderId))
            if (cancelOrderRequest.fulfilled.match(resultAction)) {
                getHomeData()
                showSuccessMsg("Order Cancelled!")
                await dispatch(getOrdersRequest())
                await dispatch(getStatsRequest())
            } else {
                setIsLoading(false)
            }
        }
    }

    return {
        orderData,
        isLoading,
        isRefreshing,

        getRefreshData,
        handleCancelOrder,
    }
};

export default useController;
