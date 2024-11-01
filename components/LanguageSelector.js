import React, { useState } from 'react';
import { View, Picker, Button, Text } from 'react-native';

const LanguageSelector = ({ onSelectLanguage }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (itemValue) => {
        setSelectedLanguage(itemValue);
        onSelectLanguage(itemValue);
    };

    return (
        <View>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={handleLanguageChange}
            >
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Spanish" value="es" />
                <Picker.Item label="Dari" value="dr" />
                <Picker.Item label="Persian" value="fa" />
                <Picker.Item label="Pashto" value="ps" />
                {/* Add more languages as needed */}
            </Picker>
            <Text>Selected Language: {selectedLanguage}</Text>
        </View>
    );
};

export default LanguageSelector;
