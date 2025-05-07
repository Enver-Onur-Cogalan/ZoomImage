import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, useAnimatedGestureHandler } from 'react-native-reanimated';

export default function ZoomImage() {
    const scale = useSharedValue(1);

    const pinchGesture = Gesture.Pinch()
        .onUpdate((e) => {
            scale.value = e.scale;
        })
        .onEnd(() => {
            scale.value = 1;
        });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    return (
        <GestureDetector gesture={pinchGesture}>
            <Animated.View style={[styles.imageContainer, animatedStyle]}>
                <Image
                    source={{ uri: 'https://picsum.photos/400/400' }}
                    style={styles.image}
                    resizeMode='contain'
                />
            </Animated.View>
        </GestureDetector>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 16,
    },
})