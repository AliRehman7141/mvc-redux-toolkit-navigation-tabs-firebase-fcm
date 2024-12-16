import React from 'react';
import {
    View,
    RefreshControl,
    ScrollView,
} from 'react-native';

import { Header } from 'components/index';

import styles from './styles';
import useController from './useController';
import { OrderDetailsScreenProps } from './models';
import { OrderCard, OrderSkeletonCard } from './components';

const OrderDetailsScreen: React.FC<OrderDetailsScreenProps> = (props) => {
    const { route } = props
    const { orderId } = route.params
    const {
        orderData,
        isLoading,
        isRefreshing,

        getRefreshData,
        handleCancelOrder,
    } = useController({ orderId })

    return (
        <View style={styles.container}>
            <Header title='Order Details' />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        title='Updating...'
                        refreshing={isRefreshing}
                        onRefresh={getRefreshData}
                    />
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
                {isLoading ?
                    <OrderSkeletonCard />
                    :
                    <OrderCard
                        orderData={orderData}
                        handleCancelOrder={handleCancelOrder}
                    />
                }
            </ScrollView>
        </View>
    );
}

export default OrderDetailsScreen;
