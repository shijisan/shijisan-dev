"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Note } from "./Notes";
import type { DragEndEvent } from "@dnd-kit/core";

function previewText(html: string, maxLength: number = 100): string {
  const textWithBreaks = html
    .replace(/<(p|div|br)[^>]*>/gi, "\n")
    .replace(/<\/(p|div)>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();

  return textWithBreaks.length > maxLength
    ? textWithBreaks.slice(0, maxLength) + "..."
    : textWithBreaks;
}

function SortableNote({
  note,
  onNoteClick,
}: {
  note: Note;
  onNoteClick: (note: Note) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: note.key });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => onNoteClick(note)}
      className="w-full py-3 px-4 bg-neutral-700/50 rounded-lg active:cursor-grab hover:cursor-pointer hover:bg-neutral-700 transition-colors h-fit mb-3 text-foreground"
    >
      {previewText(note.content)}
    </li>
  );
}

export default function NotesList({
  notes,
  setNotes,
  onNoteClick,
}: {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  onNoteClick: (note: Note) => void;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = notes.findIndex((note) => note.key === active.id);
    const newIndex = notes.findIndex((note) => note.key === over.id);

    setNotes((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={notes.map((n) => n.key)}
        strategy={rectSortingStrategy}
      >
        <ul className="w-full overflow-y-auto overflow-x-hidden h-full">
          {notes.length === 0 ? (
            <li className="text-foreground/50 italic">
              Click "+" to create a new note
            </li>
          ) : (
            notes.map((note) => (
              <SortableNote key={note.key} note={note} onNoteClick={onNoteClick} />
            ))
          )}
        </ul>
      </SortableContext>
    </DndContext>
  );
}