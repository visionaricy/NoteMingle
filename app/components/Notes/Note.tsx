"use client";

import NoteDialog from "../NoteDialog/NoteDialog";
import { useOptimistic, useState } from "react";

const Note = ({
  noteId,
  note: initialNote
}: {
  noteId: string;
  note: string;
}) => {
  const [note, setNote] = useOptimistic<string>(
    noteId === "new" ? "" : initialNote,
    // @ts-ignore
    (_: string, newNote: string) => newNote
  );
  const [isNoteEditorOpen, setIsNoteEditorOpen] = useState(false);

  const noteEditorCloseHandler = () => {
    setIsNoteEditorOpen(false);
  };

  const noteEditorOpenHandler = () => {
    setIsNoteEditorOpen(true);
  };

  return (
    <>
      <div
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer justify-center flex"
        onClick={noteEditorOpenHandler}
      >
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          {noteId === "new" ? "+ Add a new note" : note}
        </p>
      </div>
      {isNoteEditorOpen && (
        <NoteDialog
          noteId={noteId}
          note={note}
          setNote={setNote}
          onClose={noteEditorCloseHandler}
        />
      )}
    </>
  );
};

export default Note;
