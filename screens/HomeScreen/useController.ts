import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'store/index';
import { getStatsRequest } from 'store/reducers/ordersSlice';

const useController = () => {

    const dispatch = useDispatch<AppDispatch>()
    const { stats } = useSelector((state: RootState) => state.orders)

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

    useEffect(() => {
        getHomeData()
    }, [])

    const getHomeData = async () => {
        await dispatch(getStatsRequest())
        setIsLoading(false)
        setIsRefreshing(false)
    }

    const getRefreshData = async () => {
        setIsRefreshing(true)
        getHomeData()
    }

    return {
        stats,
        isLoading,
        isRefreshing,

        getRefreshData,
    }
};

export default useController;
