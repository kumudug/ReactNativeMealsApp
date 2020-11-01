import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AppProps = {

};

const CategoryMealScreen = (props: AppProps) => {
    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen!</Text>
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

export default CategoryMealScreen;