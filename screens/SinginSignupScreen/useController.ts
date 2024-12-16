import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SinginSignupScreenErrors } from './models';
import { isEmailValid } from 'utils/appHelper';
import { AuthAPIResponse, loginRequest, registerRequest } from 'store/reducers/sessionSlice';
import { AppDispatch } from 'store/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFirebaseMessaging from 'api/useFirebaseMessaging';

const initialErrorState = {
    name: "",
    email: "",
    general: "",
    password: "",
    confirmPassword: "",
}

const useController = ({ hasAccountParam = false }) => {

    const dispatch = useDispatch<AppDispatch>()
    const { requestUserPermission } = useFirebaseMessaging()

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [hasAccount, setHasAccount] = useState<boolean>(hasAccountParam)
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<SinginSignupScreenErrors>(initialErrorState)

    const isButtonActive = isEmailValid(email) && password.length > 7 && (
        hasAccount ? true : name.length > 0 && password === confirmPassword
    )

    useEffect(() => {
        setErrors(initialErrorState)
    }, [name, email, password, confirmPassword])

    const onToggleHasAccountPress = () => {
        setHasAccount(!hasAccount)
    }

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const onContinuePress = async () => {
        try {
            const fcm_token = await requestUserPermission()
            setIsLoading(true)
            if (hasAccount) {
                const resultAction = await dispatch(loginRequest({
                    email,
                    password,
                    fcm_token,
                }));

                if (loginRequest.fulfilled.match(resultAction)) {
                    onSuccess(resultAction.payload)
                } else {
                    setErrors({ ...errors, general: "Email or password wrong!" })
                }
            } else {
                const resultAction = await dispatch(registerRequest({
                    name,
                    email,
                    password,
                    password_confirmation: confirmPassword,
                    fcm_token,
                }));

                if (registerRequest.fulfilled.match(resultAction)) {
                    onSuccess(resultAction.payload)
                }
            }
        } catch (error) {
            console.log("onContinuePress-error", error)
        } finally {
            setIsLoading(false)
        }
    }

    const onSuccess = async (payload: AuthAPIResponse) => {
        await AsyncStorage.setItem("token", payload.token)
    }

    return {
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
    }
};

export default useController;
