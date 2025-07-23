'use client';

import React, { useState } from 'react';
import ChatMessage from './chat-message';
import ChatInput from './chat-input';
import { Message } from '@/types/chat';
import { SidebarTrigger } from '../ui/sidebar';

const hardMessages: Message[] = [
    {
        id: '1',
        content: 'Hello, how can I help you today?',
        senderId: 'bot',
        timestamp: new Date(),
    },
    {
        id: '2',
        content: 'I have a question about my order.',
        senderId: 'user',
        timestamp: new Date(),
    },
    {
        id: '3',
        content: 'Sure, I can assist you with that.',
        senderId: 'bot',
        timestamp: new Date(),
    },
];
const ChatBox = () => {
    const [messages, setMessages] = useState<Message[]>(hardMessages);

    const handleSendMessage = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <div className="chat-box flex flex-col p-2 pb-4 h-screen">
            {/* <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4 md:hidden"> */}
            <div className="flex items-center justify-between border-b">
                <SidebarTrigger className='cursor-pointer' />
            </div>
            <div className='flex flex-grow flex-col'>

                <div className="messages pt-4 px-2 flex-grow">
                    {messages.map((msg, index) => (
                        <ChatMessage key={index} message={msg} />
                    ))}
                </div>
                <div className="ps-6 pe-2">
                    <ChatInput onSend={handleSendMessage} />
                </div>
            </div>

        </div>
    );
};

export default ChatBox;