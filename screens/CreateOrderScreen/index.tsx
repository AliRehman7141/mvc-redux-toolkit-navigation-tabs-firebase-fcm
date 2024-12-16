
import React from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';
import {
    KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker'

import styles from './styles';
import useController from './useController';

import { CreateOrderScreenProps } from './models';
import { Button, Header, InputField, RadioButton, TimePickerButton, Typography } from 'components/index';
import { PACKAGE_SIZE, WEIGHT_METRIC } from 'utils/appEnums';
import { useInsets } from 'utils/appDimensions';
import moment from 'moment';

const CreateOrderScreen: React.FC<CreateOrderScreenProps> = () => {

    const { paddingBottom } = useInsets()
    const {
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
    } = useController()

    return (
        <View style={styles.container}>
            <Header title='Create Order' />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={"never"}
                contentContainerStyle={[styles.contentContainer, {
                    paddingBottom: 20
                }]}
                showsVerticalScrollIndicator={false}>
                <InputField
                    title={'Name'}
                    placeholder={'Jon Deo'}
                    value={name}
                    onChangeText={setName}
                    autoCapitalize='words'
                    autoComplete='name'
                    textContentType='name'
                    error={errors?.name}
                    isRequired={true}
                />
                <InputField
                    editable={false}
                    title={'Email'}
                    placeholder={'work@example.com'}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoComplete='email'
                    textContentType='emailAddress'
                    error={errors?.email}
                    isRequired={true}
                />
                <View style={{ width: "100%" }}>
                    <Typography style={styles.title}>
                        {`Weight Metric`}
                    </Typography>
                </View>
                <View style={styles.packageSizeContainer}>
                    <RadioButton
                        label={WEIGHT_METRIC.KG}
                        container={{ marginTop: 8 }}
                        isSelected={weightMetric === WEIGHT_METRIC.KG}
                        onPress={() => setWeightMetric(WEIGHT_METRIC.KG)}
                    />
                    <RadioButton
                        label={WEIGHT_METRIC.GRAM}
                        container={{ marginTop: 8 }}
                        isSelected={weightMetric === WEIGHT_METRIC.GRAM}
                        onPress={() => setWeightMetric(WEIGHT_METRIC.GRAM)}
                    />
                </View>
                <InputField
                    title={`Package Weight (${weightMetric})`}
                    placeholder={'5'}
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType={"number-pad"}
                    error={errors?.name}
                />
                <InputField
                    title={'Number of Items'}
                    placeholder={'5'}
                    value={numberOfItems}
                    onChangeText={setNumberOfItems}
                    keyboardType={"number-pad"}
                    error={errors?.name}
                />
                <TimePickerButton
                    isRequired={true}
                    title={'Pickup Time'}
                    onPress={() => setShowPickupPicker(true)}
                    placeholder={moment().format("YYYY-MM-DD hh:mm:ss")}
                    value={pickupTime
                        ? moment(pickupTime).format("YYYY-MM-DD hh:mm:ss")
                        : undefined
                    }
                />
                <InputField
                    title={'Pickup City'}
                    placeholder={'Los Angeles'}
                    value={pickupCity}
                    onChangeText={setPickupCity}
                    autoCapitalize="words"
                    autoComplete="postal-address"
                    error={errors?.pickupCity}
                    isRequired={true}
                />
                <InputField
                    title={'Pickup Address'}
                    placeholder={'456 Pickup St, LA'}
                    value={pickupAddress}
                    onChangeText={setPickupAddress}
                    autoCapitalize="words"
                    autoComplete="postal-address"
                    error={errors?.pickupAddress}
                    isRequired={true}
                />
                <TimePickerButton
                    isRequired={true}
                    title={'Delivery Time'}
                    onPress={() => setShowDeliverPicker(true)}
                    placeholder={moment().format("YYYY-MM-DD hh:mm:ss")}
                    value={deliveryTime
                        ? moment(deliveryTime).format("YYYY-MM-DD hh:mm:ss")
                        : undefined
                    }
                />
                <InputField
                    title={'Delivery City'}
                    placeholder={'Los Angeles'}
                    value={deliveryCity}
                    onChangeText={setDeliveryCity}
                    autoCapitalize="words"
                    autoComplete="postal-address"
                    error={errors?.deliverCity}
                    isRequired={true}
                />
                <InputField
                    title={'Delivery Address'}
                    placeholder={'456 Delivery St, LA'}
                    value={deliveryAddress}
                    onChangeText={setDeliveryAddress}
                    autoCapitalize="words"
                    autoComplete="postal-address"
                    error={errors?.deliverAddress}
                    isRequired={true}
                />
                <InputField
                    title={'Phone Number'}
                    preset={"+966"}
                    placeholder={'123456789'}
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    autoComplete="tel"
                    textContentType="telephoneNumber"
                    keyboardType="number-pad"
                />
                <View style={{ width: "100%" }}>
                    <Typography style={styles.title}>
                        {`Package Size`}
                    </Typography>
                </View>
                <View style={styles.packageSizeContainer}>
                    <RadioButton
                        label={"Small"}
                        container={{ marginTop: 8 }}
                        isSelected={packageSize === PACKAGE_SIZE.SMALL}
                        onPress={() => setPackageSize(PACKAGE_SIZE.SMALL)}
                    />
                    <RadioButton
                        label={"Medium"}
                        container={{ marginTop: 8 }}
                        isSelected={packageSize === PACKAGE_SIZE.MEDIUM}
                        onPress={() => setPackageSize(PACKAGE_SIZE.MEDIUM)}
                    />
                    <RadioButton
                        label={"Large"}
                        container={{ marginTop: 8 }}
                        isSelected={packageSize === PACKAGE_SIZE.LARGE}
                        onPress={() => setPackageSize(PACKAGE_SIZE.LARGE)}
                    />
                    <RadioButton
                        label={"Extra Large"}
                        container={{ marginTop: 8 }}
                        isSelected={packageSize === PACKAGE_SIZE.EXTRA_LARGE}
                        onPress={() => setPackageSize(PACKAGE_SIZE.EXTRA_LARGE)}
                    />
                </View>
            </KeyboardAwareScrollView>
            <View style={{ paddingBottom, paddingHorizontal: 16 }}>
                <Button
                    isLoading={isLoading}
                    isActive={isButtonActive}
                    container={{ marginTop: 32, height: 45 }}
                    title={'Create Order'}
                    onPress={onContinuePress}
                />
            </View>
            <DatePicker
                modal
                open={showPickupPicker}
                date={pickupTime ?? new Date()}
                onConfirm={(date) => {
                    setShowPickupPicker(false)
                    setPickupTime(date)
                }}
                onCancel={() => {
                    setShowPickupPicker(false)
                }}
            />
            <DatePicker
                modal
                open={showDeliverPicker}
                date={deliveryTime ?? new Date()}
                onConfirm={(date) => {
                    setShowDeliverPicker(false)
                    setDeliveryTime(date)
                }}
                onCancel={() => {
                    setShowDeliverPicker(false)
                }}
            />
        </View>
    );
};

export default CreateOrderScreen;
