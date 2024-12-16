import { FC } from 'react';
import { Skeleton, SkeletonProps } from '@rneui/themed';

const SkeletonView: FC<SkeletonProps> = (props) => {
    const { style, animation = "pulse" } = props
    return (
        <Skeleton
            animation={animation}
            {...props}
            style={[style]}
        />
    )
}

export default SkeletonView