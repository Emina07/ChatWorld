import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import ChatService from '../services/ChatService';
import TranslationService from '../services/TranslationService';
import SecurityService from '../services/SecurityService';

const Chat = ({ selectedLanguage }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const receivedMessages = await ChatService.receiveMessages();
            setMessages(receivedMessages);
        };
        fetchMessages();
    }, []);

    const sendMessage = async () => {
        const secureMessage = SecurityService.encrypt(message);
        const translation = await TranslationService.translate(secureMessage, selectedLanguage);
        await ChatService.sendMessage(translation);
        setMessages(prev => [...prev, translation]);
        setMessage('');
    };

    return (
        <View>
            <FlatList
                data={messages}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
            <TextInput
                placeholder="Type your message"
                value={message}
                onChangeText={setMessage}
            />
            <Button title="Send" onPress={sendMessage} />
        </View>
    );
};

export default Chat;
