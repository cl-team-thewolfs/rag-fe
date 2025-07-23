import { Message } from '@/types/chat';
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
    message: Message
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message: { content, senderId, timestamp } }) => {
    const isBot = senderId === 'bot';
    const isUser = senderId === 'user';

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
            {isBot && (
                <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback className="bg-blue-500 text-white">
                        AI
                    </AvatarFallback>
                </Avatar>
            )}
            
            <div className={cn(
                "flex flex-col max-w-[80%] sm:max-w-[60%]",
                isUser && "items-end"
            )}>
                <div className="flex items-center gap-2 mb-1">
                    <Badge variant={isBot ? "secondary" : "default"} className="text-xs">
                        {isBot ? "Assistant" : "You"}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                        {formatTimestamp(timestamp)}
                    </span>
                </div>
                
                <Card className={cn(
                    "shadow-sm",
                    isBot && "bg-muted",
                    isUser && "bg-primary text-primary-foreground"
                )}>
                    <CardContent className="p-3">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {content}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {isUser && (
                <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                        U
                    </AvatarFallback>
                </Avatar>
            )}
        </div>
    );
};

export default ChatMessage;