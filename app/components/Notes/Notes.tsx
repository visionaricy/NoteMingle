import { use } from "react";
import Note from "./Note";

const Notes = ({ notesPromise }: { notesPromise: Promise<string[]> }) => {
  const notes = use(notesPromise);

  return (
    <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      {notes.map((note, index) => (
        <Note key={index} noteId={`${index}`} note={note} />
      ))}
    </div>
  );
};

export default Notes;
