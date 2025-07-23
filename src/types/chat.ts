export interface Message {
    id: string;
    content: string;
    timestamp: Date;
    senderId:string;
    
}

export interface User {
    id: string;
    name: string;
    avatarUrl?: string;
}