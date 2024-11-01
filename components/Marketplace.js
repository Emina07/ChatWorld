import React from 'react';
import { View, Text, Button } from 'react-native';

const Marketplace = () => {
    const handleOfferService = () => {
        // Logic to offer a service
        console.log("Service offered!");
    };

    return (
        <View>
            <Text>Marketplace</Text>
            <Button title="Offer a Service" onPress={handleOfferService} />
            {/* List services here */}
        </View>
    );
};

export default Marketplace;
