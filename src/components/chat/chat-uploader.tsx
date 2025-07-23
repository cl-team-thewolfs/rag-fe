'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Upload, File, X, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UploadedFile {
    id: string;
    name: string;
    size: number;
    type: string;
}

interface ChatUploaderProps {
    uploadedFiles: UploadedFile[];
    onFilesChange: (files: UploadedFile[]) => void;
}

const ChatUploader: React.FC<ChatUploaderProps> = ({ uploadedFiles, onFilesChange }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleFileUpload = (files: FileList | null) => {
        if (!files) return;

        const newFiles: UploadedFile[] = Array.from(files).map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            size: file.size,
            type: file.type
        }));

        onFilesChange([...uploadedFiles, ...newFiles]);
    };

    const removeUploadedFile = (fileId: string) => {
        onFilesChange(uploadedFiles.filter(file => file.id !== fileId));
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <Card className="h-full flex flex-col items-center justify-center p-0">
            {/* <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Upload Files
                </CardTitle>
            </CardHeader> */}
            <CardContent className="flex-grow flex flex-col  items-center justify-center space-y-4">
                {/* Drag & Drop Area */}
                <div
                    className={cn(
                        "border-2 border-dashed rounded-lg px-18 py-4  text-center transition-colors flex-shrink-0",
                        isDragging
                            ? "border-primary bg-primary/5"
                            : "border-muted-foreground/25 hover:border-primary/50"
                    )}
                    onDragEnter={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                    }}
                    onDragLeave={(e) => {
                        e.preventDefault();
                        setIsDragging(false);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        e.preventDefault();
                        setIsDragging(false);
                        handleFileUpload(e.dataTransfer.files);
                    }}
                >
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <h3 className="text-sm font-medium mb-1">
                        Drag & drop files here
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                        or click to select files
                    </p>
                    <Input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.txt,.md"
                        onChange={(e) => handleFileUpload(e.target.files)}
                        className="hidden"
                        id="file-upload"
                    />
                    <Label htmlFor="file-upload">
                        <Button variant="outline" size="sm" className="cursor-pointer w-full text-center">
                            <Plus className="h-3 w-3 mr-1" />
                            Select Files
                        </Button>
                    </Label>
                    <p className="text-xs text-muted-foreground mt-2">
                        PDF, DOC, DOCX, TXT, MD
                    </p>
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                    <div className="mt-4 flex-grow">
                        <h4 className="text-sm font-medium mb-2">Uploaded Files:</h4>
                        <ScrollArea className="flex-grow">
                            <div className="space-y-2">
                                {uploadedFiles.map((file) => (
                                    <div
                                        key={file.id}
                                        className="flex items-center justify-between p-2 bg-muted rounded-lg"
                                    >
                                        <div className="flex items-center gap-2 min-w-0">
                                            <File className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                                            <div className="min-w-0">
                                                <p className="text-xs font-medium truncate">{file.name}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {formatFileSize(file.size)}
                                                </p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeUploadedFile(file.id)}
                                            className="h-6 w-6 p-0 flex-shrink-0"
                                        >
                                            <X className="h-3 w-3" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default ChatUploader;