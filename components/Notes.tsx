"use client";

import { useState, useEffect } from "react";
import QuillEditor from "./QuillEditor";
import NotesList from "./NotesList";

export interface Note {
   key: string;
   content: string;
}

export default function Notes() {
   const [expand, setExpand] = useState(false);
   const [editorContent, setEditorContent] = useState("");
   const [notes, setNotes] = useState<Note[]>([]);
   const [editingKey, setEditingKey] = useState<string | null>(null);

   const fetchNotes = () => {
      const fetchedNotes = localStorage.getItem("notes");
      const parsedNotes = fetchedNotes ? JSON.parse(fetchedNotes) : [];
      setNotes(parsedNotes);
   };

   const handleSave = () => {
      const stored = localStorage.getItem("notes");
      const isExist = stored ? JSON.parse(stored) : [];

      let updatedNotes;

      if (editingKey) {
         updatedNotes = isExist.map((note: Note) =>
            note.key === editingKey ? { ...note, content: editorContent } : note
         );
      } else {
         const newNote = { key: Date.now().toString(), content: editorContent };
         updatedNotes = [...isExist, newNote];
      }

      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      fetchNotes();
      setEditorContent("");
      setEditingKey(null);
      setExpand(false);
   };

   const handleDelete = () => {
      if (!editingKey) return;

      const stored = localStorage.getItem("notes");
      const notes = stored ? JSON.parse(stored) : [];

      const updatedNotes = notes.filter((note: Note) => note.key !== editingKey);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      fetchNotes();

      setEditingKey(null);
      setEditorContent("");
      setExpand(false);
   };

   useEffect(() => {
      fetchNotes();
   }, []);

   return (
      <div className="flex h-full w-full relative bg-neutral-800 rounded-lg border border-primary/10">
         <aside className="w-16 flex flex-col items-center mt-6 border-r-foreground/5 border-r h-full">
            <button
               className="bg-primary text-white rounded-full size-10 flex items-center justify-center text-2xl hover:opacity-90 transition-opacity"
               onClick={() => setExpand(!expand)}
            >
               +
            </button>
         </aside>

         <main className="w-full p-6 md:h-[337.25px]">
            <NotesList
               notes={notes}
               setNotes={setNotes}
               onNoteClick={(note) => {
                  setEditingKey(note.key);
                  setEditorContent(note.content);
                  setExpand(true);
               }}
            />
         </main>

         {expand && (
            <div className="h-screen w-full fixed bg-black/50 top-0 left-0 flex items-center justify-center z-30">
               <div className="fixed bottom-4 right-4 text-white gap-4 flex">
                  <button
                     className="hover:underline hover:cursor-pointer text-foreground/70 hover:text-foreground"
                     onClick={() => {
                        setExpand(false);
                        handleDelete();
                     }}
                  >
                     Delete and Close
                  </button>
                  <button
                     className="hover:underline hover:cursor-pointer text-foreground hover:text-white"
                     onClick={() => {
                        setExpand(false);
                        handleSave();
                     }}
                  >
                     Close and Save
                  </button>
               </div>
               <QuillEditor
                  value={editorContent}
                  onChange={(val) => setEditorContent(val)}
               />
            </div>
         )}
      </div>
   );
}