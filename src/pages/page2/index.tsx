import React from 'react';
import { View, Text } from 'react-native';

export default function Page2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>About</Text>
        </View>
    );
}
Page2.navigationOptions = {
    title: 'About',
}