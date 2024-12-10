'use client';

import * as React from 'react';
import { Upload, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  accept?: string;
  maxSize?: number; // in MB
  required?: boolean;
  onUpload: (file: File) => void;
  className?: string;
}

export function FileUpload({
  accept,
  maxSize = 5,
  required,
  onUpload,
  className,
}: FileUploadProps) {
  const [dragActive, setDragActive] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (maxSize && file.size > maxSize * 1024 * 1024) {
      alert(`文件大小不能超过 ${maxSize}MB`);
      return;
    }
    setFile(file);
    onUpload(file);
  };

  const removeFile = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      <div
        className={cn(
          'relative rounded-lg border-2 border-dashed p-6 transition-colors',
          dragActive
            ? 'border-blue-500 bg-blue-500/10'
            : 'border-white/10 bg-white/5',
          file && 'border-green-500/50 bg-green-500/10'
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          required={required && !file}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
        />
        
        <div className="text-center">
          {file ? (
            <div className="flex items-center justify-between text-white">
              <span className="truncate">{file.name}</span>
              <button
                type="button"
                onClick={removeFile}
                className="p-1 hover:bg-white/10 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-2 text-gray-400">
              <Upload className="w-8 h-8 mx-auto text-gray-400" />
              <div>
                <span className="text-blue-400">点击上传</span>
                {' '}或拖拽文件到这里
              </div>
              <div className="text-sm">
                支持 {accept?.split(',').join('/')} 格式，最大 {maxSize}MB
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 