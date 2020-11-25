import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation'

type AppProps = {
    navigation: NavigationScreenProp<any, any>
};

const CategoriesScreen = (props: AppProps) => {
    console.log(props);
    // Only top level (not nested) components get props.navigation automatically
    return (
        <View style={styles.screen}>
            <Text>Categories Screen!</Text>
            <Button title="Go to Meals" onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeals'});
                /*props.navigation.replace('CategoryMeals');
                Replace can be used when navigating from login to main app*/
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

export default CategoriesScreen;