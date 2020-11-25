import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams
} from 'react-navigation';

type AppProps = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
};

const MealDetailScreen = (props: AppProps) => {
    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen!</Text>
            <Button title="Back to Categories" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;