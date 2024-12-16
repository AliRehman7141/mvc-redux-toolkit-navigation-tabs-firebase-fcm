import React from 'react';
import { FlatList, RefreshControl, ScrollView, View } from 'react-native';

import { useInsets } from 'utils/appDimensions';

import styles from './styles';
import useController from './useController';
import { HomeScreenProps } from './models';
import { StatsCard } from './components';
import { ORDER_STATUS } from 'utils/appEnums';
import Header from 'components/Header';
import { formatTitle } from 'utils/appHelper';

const HomeScreen: React.FC<HomeScreenProps> = () => {
    const { fixedBottom } = useInsets()
    const {
        stats,
        isLoading,
        isRefreshing,

        getRefreshData,
    } = useController()

    const renderItem = ({ item }: { item: string }) => (
        <StatsCard
            isLoading={isLoading}
            count={stats?.[item]}
            title={formatTitle(item)}
        />
    )

    return (
        <View style={styles.container}>
            <Header title='Home' showArrow={false} />
            <FlatList
                refreshControl={
                    <RefreshControl
                        title='Updating...'
                        refreshing={isRefreshing}
                        onRefresh={getRefreshData}
                    />
                }
                numColumns={2}
                renderItem={renderItem}
                data={stats ? Object.keys(stats) : []}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.contentContainer, {
                    paddingBottom: fixedBottom
                }]}
            />
        </View>
    );
}

export default HomeScreen;
