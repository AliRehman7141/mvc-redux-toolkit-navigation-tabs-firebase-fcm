import { client } from './config';

export const getRequest = (url: string, extras = {}) => client.get(url, extras);

export const postRequest = (url: string, payload = {}) => client.post(url, payload);

export const patchRequest = (url: string, payload = {}, extras = {}) =>
  client.patch(url, payload, extras);

export const putRequest = (url: string, payload = {}) => client.put(url, payload);

export const deleteRequest = (url: string, payload = {}) =>
  client.delete(url, payload);
