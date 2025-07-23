'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Database, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ChatUploader from './chat-uploader';
import { Input } from '../ui/input';

interface KnowledgeBase {
    id: string;
    name: string;
    description: string;
    fileCount: number;
    size: string;
    lastUpdated: Date;
}

interface UploadedFile {
    id: string;
    name: string;
    size: number;
    type: string;
}

const mockKnowledgeBases: KnowledgeBase[] = [
    {
        id: '1',
        name: 'Product Documentation',
        description: 'Complete product documentation and user guides',
        fileCount: 25,
        size: '12.5 MB',
        lastUpdated: new Date('2024-01-15')
    },
    {
        id: '2',
        name: 'Technical Support',
        description: 'Common technical issues and solutions',
        fileCount: 18,
        size: '8.2 MB',
        lastUpdated: new Date('2024-01-20')
    },
    {
        id: '3',
        name: 'Company Policies',
        description: 'HR policies and company guidelines',
        fileCount: 12,
        size: '5.8 MB',
        lastUpdated: new Date('2024-01-10')
    },
    {
        id: '1',
        name: 'Product Documentation',
        description: 'Complete product documentation and user guides',
        fileCount: 25,
        size: '12.5 MB',
        lastUpdated: new Date('2024-01-15')
    },
    {
        id: '2',
        name: 'Technical Support',
        description: 'Common technical issues and solutions',
        fileCount: 18,
        size: '8.2 MB',
        lastUpdated: new Date('2024-01-20')
    },
    {
        id: '3',
        name: 'Company Policies',
        description: 'HR policies and company guidelines',
        fileCount: 12,
        size: '5.8 MB',
        lastUpdated: new Date('2024-01-10')
    },
    {
        id: '1',
        name: 'Product Documentation',
        description: 'Complete product documentation and user guides',
        fileCount: 25,
        size: '12.5 MB',
        lastUpdated: new Date('2024-01-15')
    },
    {
        id: '2',
        name: 'Technical Support',
        description: 'Common technical issues and solutions',
        fileCount: 18,
        size: '8.2 MB',
        lastUpdated: new Date('2024-01-20')
    },
    {
        id: '3',
        name: 'Company Policies',
        description: 'HR policies and company guidelines',
        fileCount: 12,
        size: '5.8 MB',
        lastUpdated: new Date('2024-01-10')
    },
    {
        id: '1',
        name: 'Product Documentation',
        description: 'Complete product documentation and user guides',
        fileCount: 25,
        size: '12.5 MB',
        lastUpdated: new Date('2024-01-15')
    },
    {
        id: '2',
        name: 'Technical Support',
        description: 'Common technical issues and solutions',
        fileCount: 18,
        size: '8.2 MB',
        lastUpdated: new Date('2024-01-20')
    },
    {
        id: '3',
        name: 'Company Policies',
        description: 'HR policies and company guidelines',
        fileCount: 12,
        size: '5.8 MB',
        lastUpdated: new Date('2024-01-10')
    },
];

const ChatKnowledgeBase = () => {
    const [selectedKBs, setSelectedKBs] = useState<string[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

    // Query state for search functionality
    const [searchQuery, setSearchQuery] = useState('');
    const clearSearch = () => {
        setSearchQuery('');
    };

    const handleKBSelection = (kbId: string, checked: boolean) => {
        if (checked) {
            setSelectedKBs([...selectedKBs, kbId]);
        } else {
            setSelectedKBs(selectedKBs.filter(id => id !== kbId));
        }
    };

    return (
        <div className="w-full h-screen flex flex-col space-y-4 p-2">
            {/* Selected Knowledge Bases Section */}
            <div className=" flex-4/5  overflow-hidden">
                <Card className="h-full flex flex-col gap-2 py-3">
                    <CardHeader className='flex-shrink-0 pb-2 px-2'>
                        <CardTitle className="flex items-center gap-2 text-sm">
                            <Database className="h-4 w-4" />
                            Knowledge Bases
                        </CardTitle>

                        {/* Search Input */}
                        <div className="relative">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                            <Input
                                placeholder="Search knowledge bases..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-7 pr-8 h-8 text-xs"
                            />
                            {searchQuery && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow px-3 flex-1 min-h-0">
                        <div className="h-full flex flex-col">
                            <ScrollArea className="flex-1 min-h-0">
                                <div className="space-y-2 pr-3">
                                    {mockKnowledgeBases.map((kb) => (
                                        <div
                                            key={kb.id}
                                            className={cn(
                                                "flex items-start space-x-2 p-2 rounded-lg border transition-colors",
                                                selectedKBs.includes(kb.id)
                                                    ? "bg-primary/5 border-primary"
                                                    : "bg-muted/50 hover:bg-muted"
                                            )}
                                        >
                                            <Checkbox
                                                id={kb.id}
                                                checked={selectedKBs.includes(kb.id)}
                                                onCheckedChange={(checked) =>
                                                    handleKBSelection(kb.id, checked as boolean)
                                                }
                                                className="mt-1"
                                            />
                                            <div className="flex-1 space-y-1">
                                                <Label
                                                    htmlFor={kb.id}
                                                    className="text-xs font-medium cursor-pointer"
                                                >
                                                    {kb.name}
                                                </Label>
                                                <p className="text-xs text-muted-foreground">
                                                    {kb.description}
                                                </p>
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <Badge variant="outline" className="text-xs px-1 py-0">
                                                        {kb.fileCount} files
                                                    </Badge>
                                                    <Badge variant="outline" className="text-xs px-1 py-0">
                                                        {kb.size}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>

                        {selectedKBs.length > 0 && (
                            <div className="mt-3 p-2 bg-primary/5 rounded-lg">
                                <p className="text-xs font-medium mb-1">Selected:</p>
                                <div className="flex flex-wrap gap-1">
                                    {selectedKBs.map((kbId) => {
                                        const kb = mockKnowledgeBases.find(k => k.id === kbId);
                                        return kb ? (
                                            <Badge key={kbId} variant="default" className="text-xs">
                                                {kb.name}
                                            </Badge>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* File Upload Section */}
            <div className="flex-1/5">
                <ChatUploader
                    uploadedFiles={uploadedFiles}
                    onFilesChange={setUploadedFiles}
                />
            </div>
        </div>
    );
};

export default ChatKnowledgeBase;