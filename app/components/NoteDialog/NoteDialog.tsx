"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { deleteNote, updateNote } from "@/app/actions/note";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="!px-3 !py-2 !rounded !font-medium !bg-black !text-white !text-sm"
      type="submit"
      disabled={pending}
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
};

function NoteDialog({
  noteId,
  note: initialNote,
  setNote,
  onClose
}: {
  noteId: string;
  note: string;
  setNote: (note?: string) => void;
  onClose: () => void;
}) {
  const [noteLength, setNoteLength] = useState<number>(initialNote.length);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const handleClose = () => {
    onClose();
  };

  const handleUpdateNote = async (formData: FormData) => {
    const note = formData.get("note")?.toString();
    setNote(note);

    const state = await updateNote({ noteId, note });

    if (state?.status === "error") {
      console.error("Update failed");
    }

    handleClose();
  };

  const handleDeleteNote = async () => {
    setIsDeleting(true);
    const state = await deleteNote({ noteId });

    if (state?.status === "error") {
      console.error("Delete failed");
    }

    setIsDeleting(false);
    handleClose();
  };

  return (
    <Transition.Root show={!!noteId} as={Fragment}>
      <Dialog
        as="div"
        className={"relative z-50"}
        open={!!noteId}
        onClose={handleClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0">
          <div className="fixed bottom-0 max-h-4/5 w-full rounded-t-2xl bg-white text-center md:flex md:h-auto md:max-h-[80%] md:min-h-full md:items-center md:justify-center md:bg-[unset] md:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={
                  "grid grid-rows-[auto_1fr_auto] relative h-full max-h-[85dvh] min-h-40 md:min-w-96 md:max-w-2xl transform rounded-t-2xl bg-white px-4 pt-5 pb-4 text-left align-middle text-sm transition-all md:rounded-2xl md:shadow-lg text-black"
                }
              >
                <div className="flex justify-between items-center font-bold font-serif text-base md:text-lg mb-1.5 gap-2">
                  <h2 className="sticky top-0 font-bold font-serif bg-white text-xl ">
                    {noteId === "new" ? " Create New Note" : "Edit/Delete Note"}
                  </h2>
                  {noteId !== "new" ? (
                    <button
                      onClick={handleDeleteNote}
                      className="text-sm font-black self-start cursor-pointer text-red-500"
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                  ) : (
                    <div
                      onClick={handleClose}
                      className="text-2xl font-black self-start cursor-pointer"
                    >
                      X
                    </div>
                  )}
                </div>
                <form
                  action={handleUpdateNote}
                  className="auto-rows-min gap-3 bg-black/5 rounded-3xl p-4 min-w-96 min-h-60"
                >
                  <div className="flex flex-col h-full">
                    <textarea
                      name="note"
                      id="note"
                      autoFocus
                      className="px-0 bg-transparent outline-none border-none w-full rounded h-full focus:ring-0"
                      defaultValue={initialNote}
                      maxLength={301}
                      onChange={(e) =>
                        setNoteLength(e.currentTarget.value.length)
                      }
                    />

                    {noteLength > 300 && (
                      <div className="flex bg-[#FFFFFF66] py-1 px-3 rounded-lg text-sm text-black font-serif font-bold items-center mt-2">
                        Must not be longer then 300 characters
                      </div>
                    )}

                    {noteLength < 20 && (
                      <div className="flex bg-[#FFFFFF66] py-1 px-3 rounded-lg text-sm text-black font-serif font-bold items-center mt-2">
                        Must not be longer then 20 characters
                      </div>
                    )}

                    {noteLength >= 20 && noteLength <= 300 && (
                      <div className="flex items-center gap-2 mt-2">
                        <SubmitButton />
                        <button
                          className="px-3 py-2 rounded font-medium bg-black/30 text-black text-md"
                          onClick={handleClose}
                        >
                          Discard
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default NoteDialog;
