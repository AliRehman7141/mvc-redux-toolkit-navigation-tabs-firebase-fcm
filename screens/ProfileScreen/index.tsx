import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';

import {
    Button,
    Header,
    Typography,
} from 'components/index';
import { useInsets } from 'utils/appDimensions';

import styles from './styles';
import { ProfileScreenProps } from './models';
import useController from './useController';

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
    const { fixedBottom, top } = useInsets()
    const {
        userData,
        isLoading,

        onLogoutPress,
    } = useController()

    return (
        <View style={styles.container}>
            <Header title='Profile' showArrow={false} />
            <ScrollView
                contentContainerStyle={[styles.contentContainer, { paddingBottom: fixedBottom }]}
                bounces={false}
                showsVerticalScrollIndicator={false}>
                <View style={styles.userDetailsView}>
                    <View style={styles.userDetails}>
                        <Typography style={styles.useNameText}>
                            {`${userData?.name}`}
                        </Typography>
                        <Typography style={{ fontSize: 12 }}>
                            {`${userData?.email}`}
                        </Typography>
                    </View>
                </View>
                <View style={{ flexGrow: 1, marginTop: 10 }}>
                    <View style={{ flexGrow: 1 }} />
                    <Button
                        isPrimary={false}
                        title={"Log out"}
                        isLoading={isLoading}
                        onPress={onLogoutPress}
                        container={styles.logoutButton}
                        titleStyle={styles.logoutText}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default ProfileScreen;
