import React from 'react';
import { View, Text, Button } from 'react-native';

const Subscription = () => {
    const handleSubscribe = () => {
        // Logic for subscription
        console.log("Subscribed!");
    };

    return (
        <View>
            <Text>Subscription Plans</Text>
            <Button title="Subscribe Now" onPress={handleSubscribe} />
            {/* Display subscription options here */}
        </View>
    );
};

export default Subscription;
