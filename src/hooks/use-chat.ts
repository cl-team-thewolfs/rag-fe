import { useState, useEffect } from 'react';
import { Message } from '@/types/chat';

const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const sendMessage = (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const receiveMessage = (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    useEffect(() => {
        // Simulate receiving messages from a server
        const interval = setInterval(() => {
            const newMessage: Message = {
                id: Date.now().toString(),
                content: 'New message from server',
                senderId: 'server',
                timestamp: new Date()
            };
            receiveMessage(newMessage);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return {
        messages,
        loading,
        sendMessage,
    };
};

export default useChat;