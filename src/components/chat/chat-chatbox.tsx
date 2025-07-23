'use client';

import React, { useState } from 'react';
import ChatMessage from './chat-message';
import ChatInput from './chat-input';
import { Message } from '@/types/chat';
import { SidebarTrigger } from '../ui/sidebar';
import { ScrollArea } from '@radix-ui/react-scroll-area';

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
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        senderId: 'bot',
        timestamp: new Date(),
    },
];
const ChatBox = () => {
    const [messages, setMessages] = useState<Message[]>(hardMessages);

    const handleSendMessage = (message) => {
        const newMessage: Message = {
            id: String(messages.length + 1),
            content: message,
            senderId: 'user',
            timestamp: new Date(),
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="chat-box flex flex-col p-2 pb-4 h-screen">
            {/* <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4 md:hidden"> */}
            <div className="flex items-center justify-between border-b">
                <SidebarTrigger className='cursor-pointer' />
            </div>
            <div className='flex flex-grow flex-col overflow-hidden'>
                <ScrollArea className="flex-grow overflow-y-auto">
                    <div className="messages pt-4 px-2 flex-grow pe-6">
                        {messages.map((msg, index) => (
                            <ChatMessage key={index} message={msg} />
                        ))}
                    </div>
                </ScrollArea>
            </div>
            <div className="ps-6 pe-2">
                <ChatInput onSend={handleSendMessage} />
            </div>

        </div>
    );
};

export default ChatBox;