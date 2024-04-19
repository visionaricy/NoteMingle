import Link from "next/link";
import Note from "../Notes/Note";

const NewNoteButton = () => {
  return (
    <div className="text-center lg:mb-0 lg:max-w-5xl justify-center w-full">
      <Note noteId="new" note="+ Add a new note" />
    </div>
  );
};

export default NewNoteButton;
