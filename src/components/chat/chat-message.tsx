import { Message } from '@/types/chat';
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription } from '../ui/alert';

interface ChatMessageProps {
    message: Message
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message: { content, senderId, timestamp } }) => {
    const isBot = senderId === 'bot';
    const isUser = senderId === 'user';
    const formatContent = (text: string) => {
        return text
            .split('\n')
            .map((paragraph, index) => (
                <p key={index} className="mb-2 last:mb-0">
                    {paragraph}
                </p>
            ));
    };
    const formatTimestamp = (date: Date | undefined) => {
        if (!date) return '';
        return new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC'
        }).format(date);
    };

    return (
        <div className={cn(
            "flex w-full mb-4 gap-3",
            isUser && "justify-end"
        )}>
            {
                !isBot ?
                    <div className='flex flex-col items-end'>
                        <div className="flex items-center gap-2 mb-1">

                            <span className="text-xs text-muted-foreground">
                                {formatTimestamp(timestamp)}
                            </span>
                            {/* <Badge variant={"default"} className="text-xs">
                                You
                            </Badge> */}
                        </div>
                        <Alert className={cn(
                            "shadow-sm bg-muted"
                        )}>
                            <AlertDescription className="min-w-0">
                                    {content}
                            </AlertDescription>
                        </Alert>
                    </div>
                    :
                    <div className="text-sm leading-relaxed px-4">
                        {formatContent(content)}
                    </div>
            }

        </div>
    );
};

export default ChatMessage;