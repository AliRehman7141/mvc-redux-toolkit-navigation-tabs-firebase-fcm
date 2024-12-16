import React from 'react';
import {
    View,
    FlatList,
    Pressable,
    RefreshControl,
} from 'react-native';

import { useInsets } from 'utils/appDimensions';
import { Header, ListEmptyComponent } from 'components/index';

import styles from './styles';
import useController from './useController';
import { OrdersListScreenProps } from './models';
import { OrderCard, OrderSkeletonCard } from './components';
import { DeliveryOrder } from 'utils/appModels';
import { keyExtractor } from 'utils/appHelper';
import { PlusIcon } from 'assets/icons';

const OrdersListScreen: React.FC<OrdersListScreenProps> = () => {
    const { paddingBottom } = useInsets()
    const {
        orders,
        isLoading,
        isRefreshing,

        onOrderPress,
        getRefreshData,
        handleCancelOrder,
        onCreateOrderPress,
    } = useController()

    const renderListEmptyComponent = () => (
        <ListEmptyComponent
            title={"No Orders"}
        />
    )

    const renderOrderItem = ({ item }: { item: DeliveryOrder }) => (
        <OrderCard
            item={item}
            onOrderPress={onOrderPress}
            handleCancelOrder={handleCancelOrder}
        />
    );

    return (
        <View style={styles.container}>
            <Header title='Orders' showArrow={false} />
            {isLoading ?
                <View style={{ padding: 16 }}>
                    <OrderSkeletonCard />
                    <OrderSkeletonCard />
                </View>
                :
                <FlatList
                    data={orders}
                    refreshControl={
                        <RefreshControl
                            title='Updating...'
                            refreshing={isRefreshing}
                            onRefresh={getRefreshData}
                        />
                    }
                    keyExtractor={keyExtractor}
                    renderItem={renderOrderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, padding: 16 }}
                    ListEmptyComponent={renderListEmptyComponent}
                />
            }
            <Pressable
                style={styles.floatingButton}
                onPress={onCreateOrderPress}>
                <PlusIcon />
            </Pressable>
        </View>
    );
}

export default OrdersListScreen;
