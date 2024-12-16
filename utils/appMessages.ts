import { showMessage } from 'react-native-flash-message';
import appColors from './appColors';

export const showErrorMsg = (msgStr: string, options = {}) =>
  showMessage({
    message: msgStr,
    type: 'danger',
    ...options
  });


export const showSuccessMsg = (msgStr: string, options = {}) =>
  showMessage({
    message: msgStr,
    type: 'success',
    backgroundColor: appColors.primary,
    ...options
  });

export const showWarningMsg = (msgStr: string, options = {}) =>
  showMessage({
    message: msgStr,
    type: 'warning',
    ...options
  });