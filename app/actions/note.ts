export const updateNote = async ({
  noteId,
  note
}: {
  noteId: string;
  note?: string;
}) => {
  console.log("Update note", { noteId, note });

  await new Promise((r) => setTimeout(r, 2000));

  return {
    status: "success"
  };
};

export const deleteNote = async ({ noteId }: { noteId: string }) => {
  console.log("Delete note", { noteId });

  await new Promise((r) => setTimeout(r, 2000));

  return {
    status: "success"
  };
};
