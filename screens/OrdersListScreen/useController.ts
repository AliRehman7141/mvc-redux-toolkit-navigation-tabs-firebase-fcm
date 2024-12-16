import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'store/index';
import NavKeys, { NavigationProp } from 'navigations/NavKeys';
import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { cancelOrderRequest, getOrdersRequest, getStatsRequest } from 'store/reducers/ordersSlice';
import { showSuccessMsg } from 'utils/appMessages';

const useController = () => {

    const dispatch = useDispatch<AppDispatch>()
    const navigation = useNavigation<NavigationProp>()
    const { orders } = useSelector((state: RootState) => state.orders)

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

    useEffect(() => {
        getHomeData()
    }, [])

    const getHomeData = async () => {
        await dispatch(getOrdersRequest())
        setIsLoading(false)
        setIsRefreshing(false)
        await dispatch(getStatsRequest())
    }

    const getRefreshData = async () => {
        setIsRefreshing(true)
        getHomeData()
    }

    const onCreateOrderPress = () => {
        navigation.navigate(NavKeys.CreateOrderScreen)
    }

    const onOrderPress = (orderId?: number) => {
        if (orderId) {
            navigation.navigate(NavKeys.OrderDetailsScreen, { orderId })
        }
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
            } else {
                setIsLoading(false)
            }
        }
    }
    return {
        orders,
        isLoading,
        isRefreshing,

        onOrderPress,
        getRefreshData,
        handleCancelOrder,
        onCreateOrderPress,
    }
};

export default useController;
