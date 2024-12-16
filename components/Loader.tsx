import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import appColors from 'utils/appColors';

interface LoaderProps {
    loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
    return loading ? (
        <View style={styles.container}>
            <View style={styles.overlay}>
                <ActivityIndicator size="large" color={appColors.primary} />
            </View>
        </View>
    ) : null;
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    overlay: {
        borderRadius: 10,
        padding: 20,
    },
});

export default Loader;
