import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

type AppProps = {
    navigation: NavigationScreenProp<any, any>
};

const CategoryMealScreen = (props: AppProps) => {
    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen!</Text>
            <Button title="Go to Meal Details" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'});
                /*props.navigation.push('MealDetail');
                'push' can be used to navigate to the same screen with 
                a different data set*/
            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.goBack();
                //pop can be used as well
            }}
            />
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