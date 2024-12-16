import { getRequest, postRequest, putRequest } from './index';

// Session
export const loginAPI = (payload: any) => postRequest(`/user/login`, payload)
export const registerAPI = (payload: any) => postRequest(`/user/register`, payload)
export const getUserAPI = () => getRequest(`/user`)

export const getOrdersPI = () => getRequest(`/shipping-orders`)
export const getStatsAPI = () => getRequest(`/shipping-orders/count-by-status`)
export const getOrderDataAPI = (orderId: number) => getRequest(`/shipping-orders/${orderId}`)
export const cancelOrderAPI = (orderId: number) => putRequest(`/shipping-orders/${orderId}/cancel`)
export const createOrderAPI = (payload: any) => postRequest(`/shipping-orders`, payload)