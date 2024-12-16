import { useDispatch, useSelector } from 'react-redux';

import { resetState } from 'store/reducers/commonActions';
import { AppDispatch, RootState } from 'store/index';
import { useState } from 'react';

const useController = () => {

    const dispatch = useDispatch<AppDispatch>()
    const { userData } = useSelector((state: RootState) => state.session)

    const [isLoading, setIsLoading] = useState(false)

    const onLogoutPress = async () => {
        dispatch(resetState())
    }

    return {
        userData,
        isLoading,

        onLogoutPress,
    }
};

export default useController;
