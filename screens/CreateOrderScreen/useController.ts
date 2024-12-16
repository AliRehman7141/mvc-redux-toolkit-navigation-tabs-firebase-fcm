import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import { NavigationProp } from 'navigations/NavKeys';
import { isEmailValid } from 'utils/appHelper';
import { AppDispatch, RootState } from 'store/index';
import { CreateOrderScreenErrors } from './models';
import { PACKAGE_SIZE, WEIGHT_METRIC } from 'utils/appEnums';
import { createOrderRequest, getOrdersRequest, getStatsRequest } from 'store/reducers/ordersSlice';

const initialErrorState = {
    name: "",
    email: "",
    weight: "",
    general: "",
    pickupTime: "",
    pickupCity: "",
    deliveryCity: "",
    deliveryTime: "",
    numberOfItems: "",
    pickupAddress: "",
    deliveryAddress: "",
}

const useController = () => {

    const dispatch = useDispatch<AppDispatch>()
    const navigation = useNavigation<NavigationProp>()

    const { userData } = useSelector((state: RootState) => state.session)

    const [name, setName] = useState<string>(userData?.name ?? "")
    const [email, setEmail] = useState<string>(userData?.email ?? "")
    const [weight, setWeight] = useState<string>("")
    const [weightMetric, setWeightMetric] = useState<WEIGHT_METRIC>(WEIGHT_METRIC.KG)
    const [numberOfItems, setNumberOfItems] = useState<string>("")
    const [pickupTime, setPickupTime] = useState<Date>()
    const [pickupCity, setPickupCity] = useState<string>("")
    const [pickupAddress, setPickupAddress] = useState<string>("")
    const [deliveryTime, setDeliveryTime] = useState<Date>()
    const [deliveryCity, setDeliveryCity] = useState<string>("")
    const [deliveryAddress, setDeliveryAddress] = useState<string>("")
    const [mobileNumber, setMobileNumber] = useState<string>("")
    const [packageSize, setPackageSize] = useState<PACKAGE_SIZE>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showPickupPicker, setShowPickupPicker] = useState<boolean>(false)
    const [showDeliverPicker, setShowDeliverPicker] = useState<boolean>(false)
    const [errors, setErrors] = useState<CreateOrderScreenErrors>(initialErrorState)

    const isButtonActive =
        isEmailValid(email)
        && name.length > 0
        && pickupCity.length > 0
        && pickupAddress.length > 0
        && deliveryCity.length > 0
        && deliveryAddress.length > 0
        && _.isNil(pickupTime) === false
        && _.isNil(deliveryTime) === false

    useEffect(() => {
        setErrors(initialErrorState)
    }, [
        name, email, weight,
        numberOfItems, pickupTime,
        pickupCity, pickupAddress,
        deliveryTime, deliveryCity,
        deliveryAddress,
    ])

    const onContinuePress = async () => {
        setIsLoading(true)
        try {
            const resultAction = await dispatch(createOrderRequest({
                name,
                email,
                mobile_key: "966",
                pickup_city: pickupCity,
                phone_number: mobileNumber,
                delivery_city: deliveryCity,
                weight_metric: weightMetric,
                pickup_address: pickupAddress,
                package_size: packageSize ?? null,
                delivery_address: deliveryAddress,
                pickup_time: moment(pickupTime).format("YYYY-MM-DD hh:mm:ss"),
                delivery_time: moment(deliveryTime).format("YYYY-MM-DD hh:mm:ss"),
                package_weight: weight?.length > 0 ? parseInt(weight) : null,
                number_of_items: numberOfItems?.length > 0 ? parseInt(numberOfItems) : null,
            }));

            if (createOrderRequest.fulfilled.match(resultAction)) {
                await dispatch(getOrdersRequest())
                await dispatch(getStatsRequest())
                navigation.goBack()
            }
        } catch (error) {
            console.log("onContinuePress-error", error)
        } finally {
            setIsLoading(false)
        }
    }


    return {
        name,
        email,
        errors,
        weight,
        isLoading,
        pickupTime,
        pickupCity,
        packageSize,
        weightMetric,
        mobileNumber,
        deliveryCity,
        deliveryTime,
        numberOfItems,
        pickupAddress,
        isButtonActive,
        deliveryAddress,
        showPickupPicker,
        showDeliverPicker,

        setName,
        setEmail,
        setWeight,
        setPickupTime,
        setPickupCity,
        setPackageSize,
        setDeliveryCity,
        setWeightMetric,
        onContinuePress,
        setMobileNumber,
        setDeliveryTime,
        setPickupAddress,
        setNumberOfItems,
        setDeliveryAddress,
        setShowPickupPicker,
        setShowDeliverPicker,
    }
};

export default useController;
