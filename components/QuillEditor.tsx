'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

type Props = {
  MaxNoteNum: string;
  currentKey: string;
};

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function QuillEditor({ MaxNoteNum, currentKey }: Props) {
  const [content, setContent] = useState<string>('');
  const [isReady, setIsReady] = useState(false);

  const fetchNoteContent = (key: string) => {
    console.log('Fetching content for key:', key);
    
  
    setIsReady(false);
    
  
    setTimeout(() => {
      if (key !== '') {
        const saved = localStorage.getItem(key);
        console.log('Found saved content:', saved);
        setContent(saved || ''); 
      } else {
        console.log('Setting empty content for new note');
        setContent(''); 
      }
      setIsReady(true);
    }, 50);
  };

  const handleSave = (newContent: string) => {
    if (currentKey !== '') {
      localStorage.setItem(currentKey, newContent);
      console.log('Saved to existing key:', currentKey);
    } else if (MaxNoteNum !== '') {
      localStorage.setItem(MaxNoteNum, newContent);
      console.log('Saved to new key:', MaxNoteNum);
    }
  };

  useEffect(() => {
    fetchNoteContent(currentKey);
  }, [currentKey]);

  if (!isReady) {
    return <div className="bg-white max-w-md rounded-md p-4">Loading editor...</div>;
  }

  const editorKey = currentKey || `new-${MaxNoteNum}`;

  return (
    <ReactQuill
      key={editorKey}
      theme="snow"
      value={content}
      onChange={(value) => {
        setContent(value);
        handleSave(value);
      }}
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean'],
        ],
      }}
      className="bg-white max-w-md rounded-md"
    />
  );
}