import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Typography from './Typography';
import appColors from 'utils/appColors';

interface ListEmptyComponentProps {
    title: string;
}

const ListEmptyComponent: React.FC<ListEmptyComponentProps> = (props) => {
    const { title } = props

    return (
        <View style={styles.container}>
            <Typography style={styles.emptyListText}>
                {`${title}`}
            </Typography>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.bgColor,
    },
    emptyListText: {
        fontSize: 18,
        fontStyle: "italic"
    }
});

export default ListEmptyComponent;
