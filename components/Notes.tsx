"use client"

import { useState, useEffect } from "react";
import QuillEditor from "./QuillEditor";
import NotesList from "./NotesList";
import type { Note } from "@/types/global";


export default function Notes() {

   const [expand, setExpand] = useState(false);
   const [editorContent, setEditorContent] = useState("");
   const [notes, setNotes] = useState<Note[]>([])
   const [editingKey, setEditingKey] = useState<string | null>(null);

   const fetchNotes = () => {
      const fetchedNotes = localStorage.getItem("notes");
      const parsedNotes = fetchedNotes ? JSON.parse(fetchedNotes) : [];
      setNotes(parsedNotes);
      console.log(parsedNotes);
   }

   const handleSave = () => {

      const stored = localStorage.getItem("notes");
      const isExist = stored ? JSON.parse(stored) : [];

      let updatedNotes;

      if (editingKey) {
         updatedNotes = isExist.map((note: Note) =>
            note.key === editingKey ? { ...note, content: editorContent } : note
         );
      }
      else {
         const newNote = { key: Date.now().toString(), content: editorContent }
         updatedNotes = [...isExist, newNote];
      }

      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      fetchNotes();
      setEditorContent("");
      setEditingKey(null);
      setExpand(false);
   }

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
   }

   useEffect(() => {
      fetchNotes();
   }, []);


   return (
      <>
         <div className="flex h-full w-full">

            <aside className="w-16 flex flex-col items-center py-6 border-e-foreground/50 border-e h-full space-y-8">
               <button className="bg-foreground text-background rounded-full size-10 btn p-0 text-2xl/tight" onClick={() => setExpand(!expand)}>
                  +
               </button>
            </aside>

            <main className="w-full h-full p-6">
               <NotesList notes={notes} setNotes={setNotes} onNoteClick={(note) => { setEditingKey(note.key); setEditorContent(note.content); setExpand(true); }} />
            </main>

            {expand &&

               <div className="h-screen w-full fixed bg-black/50 top-0 left-0 flex items-center justify-center">
                  <div className="fixed top-[1rem] right-[1rem] text-white gap-4 flex" >
                     <button className="hover:underline hover:cursor-pointer" onClick={() => { setExpand(!expand); handleDelete(); }}>Delete and Close</button>
                     <button className="hover:underline hover:cursor-pointer" onClick={() => { setExpand(!expand); handleSave(); }}>Close and Save</button>
                  </div>
                  <QuillEditor
                     value={editorContent}
                     onChange={(val) => setEditorContent(val)}
                  />
               </div>
            }


         </div>

      </>
   )
}