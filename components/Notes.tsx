"use client"

import { useState, useEffect } from "react";
import MDEditor from "./QuillEditor";
import QuillEditor from "./QuillEditor";

function previewText(html: string, maxLength: number = 100): string {
  const textWithBreaks = html
    .replace(/<(p|div|br)[^>]*>/gi, '\n')
    .replace(/<\/(p|div)>/gi, '')        
    .replace(/<[^>]+>/g, '')             
    .replace(/&nbsp;/g, ' ')             
    .trim();

  return textWithBreaks.length > maxLength
    ? textWithBreaks.slice(0, maxLength) + '...'
    : textWithBreaks;
}


export default function Notes() {

   const [expand, setExpand] = useState(false);
   const [maxNoteNum, setMaxNoteNum] = useState("");
   const [notes, setNotes] = useState<{key: string; value: string}[]>([]);
   const [currentKey, setCurrentKey] = useState<string>("");

   const handleCreateNote = () => {
      const getMaxNoteNum = (localStorage.length + 1).toString();
      setMaxNoteNum(getMaxNoteNum);
      setCurrentKey("");
      setExpand(!expand);
   }

   const handleEditNote = (key: string) => {
      setCurrentKey(key);
      setMaxNoteNum("");
      setExpand(!expand);
   }

   const fetchNotes = () => {
      const tempNotes = [];
      for (let i = 0; i < localStorage.length; i++){
         const key = localStorage.key(i)
         const value = localStorage.getItem(key!);
         if (value) tempNotes.push({key: key!, value});
      }
      setNotes(tempNotes);
   }

   useEffect(() => {
      fetchNotes();
   }, [])

   return (
      <>
         <div className="flex h-full">

            <aside className="w-16 flex flex-col items-center py-8 border-e-foreground/50 border-e h-full space-y-8">
               <h2 className="text-center text-xs font-medium">Sample CRUD</h2>
               <button className="bg-foreground text-background rounded-full size-8 btn p-0" onClick={handleCreateNote}>
                  +
               </button>
            </aside>

            <main className="w-full h-full p-4">
               <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 h-full grid-rows-3 gap-4 overflow-y-auto">
                  {notes.map(({key, value} ) => (
                     <li className="w-full h-full rounded-md border border-foreground p-4 bg-foreground/10 hover:cursor-pointer hover:bg-foreground/20 transition-all" key={key} onClick={() => handleEditNote(key)}>
                        <p style={{ whiteSpace: 'pre-wrap' }}>{previewText(value)}</p>
                     </li>
                  ))}
               </ul>
            </main>

            {expand &&

               <div className="h-screen w-full fixed bg-black/50 top-0 left-0 flex items-center justify-center">
                  <button className="fixed top-[1rem] right-[1rem] text-white" onClick={() => {setExpand(!expand); fetchNotes(); setCurrentKey(""), setMaxNoteNum("");}}>Close and Save</button>
                  <QuillEditor MaxNoteNum={maxNoteNum} currentKey={currentKey} />
               </div>
            }


         </div>

      </>
   )
}