import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const ChatInput = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (message.trim()) {
            onSend(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full">
            <Input
                value={message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="flex-grow h-24 "
            />
            <Button type="submit" className="ml-2 h-24 cursor-pointer w-24">
                Send
            </Button>
        </form>
    );
};

export default ChatInput;