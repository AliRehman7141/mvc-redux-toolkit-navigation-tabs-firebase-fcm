
import React from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';
import {
    KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import appColors from 'utils/appColors';
import useController from './useController';

import { SinginSignupScreenProps } from './models';
import { Button, InputField, Typography } from 'components/index';

const SinginSignupScreen: React.FC<SinginSignupScreenProps> = (props) => {
    const { route } = props
    const { hasAccountParam = false } = route.params

    const {
        name,
        email,
        errors,
        password,
        isLoading,
        hasAccount,
        isButtonActive,
        confirmPassword,
        isPasswordVisible,

        setName,
        setEmail,
        onEyePress,
        setPassword,
        onContinuePress,
        setConfirmPassword,
        onToggleHasAccountPress,
    } = useController({ hasAccountParam })

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={"never"}
                contentContainerStyle={styles.contentContainer}>
                <View style={{ flexGrow: 1, justifyContent: "center" }}>
                    <Typography style={styles.signInHeading}>
                        {`Sign ${hasAccount ? 'in' : 'up'}`}
                    </Typography>
                </View>
                {hasAccount ? null :
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
                }
                <InputField
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
                <InputField
                    value={password}
                    title={'Password'}
                    onChangeText={setPassword}
                    placeholder={'Enter your password'}
                    isPassword={true}
                    secureTextEntry={isPasswordVisible}
                    onEyePress={onEyePress}
                    error={errors?.password}
                    isRequired={true}
                />
                {hasAccount ? null :
                    <InputField
                        value={confirmPassword}
                        title={'Confirm password'}
                        onChangeText={setConfirmPassword}
                        placeholder={'Enter confirm password'}
                        isPassword={true}
                        secureTextEntry={isPasswordVisible}
                        onEyePress={onEyePress}
                        error={errors?.confirmPassword}
                        isRequired={true}
                    />
                }
                {errors.general?.length ?
                    <Typography style={[styles.errorText]}>
                        {`${errors.general}`}
                    </Typography> : null
                }
                <Button
                    isLoading={isLoading}
                    isActive={isButtonActive}
                    container={{ marginTop: 32 }}
                    title={hasAccount ? 'Sign in' : 'Sign up'}
                    onPress={onContinuePress}
                />
                <Typography style={styles.hasAccountText}>
                    {`${hasAccount ? 'Don\'t' : 'Already'} have an account? `}
                    <Typography
                        style={[styles.hasAccountText, { color: appColors.primary }]}
                        onPress={onToggleHasAccountPress}>
                        {hasAccount ? `Sign up` : `Log in`}
                    </Typography>
                </Typography>
                <View style={{ flexGrow: 1 }} />
            </KeyboardAwareScrollView>
            <View style={{
                paddingHorizontal: 50,
                paddingBottom: 20
            }}>
                <Typography style={styles.termAndPrivacy}>
                    {`By signing in, You agree to the\nTestApp's`}
                    <Typography style={[styles.termAndPrivacy, { color: appColors.primary }]}>
                        {` Terms of Service `}
                    </Typography>
                    {`and`}
                    <Typography style={[styles.termAndPrivacy, { color: appColors.primary }]}>
                        {` Privacy Policy.`}
                    </Typography>
                </Typography>
            </View>
        </SafeAreaView>
    );
};

export default SinginSignupScreen;
