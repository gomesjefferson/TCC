import React from 'react';
import { View, Button, Text } from 'react-native';

export default function Page1({ navigation }: { navigation: any }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home ;D</Text>
            <Button
                title="Ir para About"
                onPress={() => navigation.navigate('About')}
            />
        </View>
    );
}
Page1.navigationOptions = {
    title: 'Home',
}