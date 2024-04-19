import NewNoteButton from "./components/NewNoteButton /NewNoteButton ";
import Notes from "./components/Notes/Notes";

const fetchNotes = async () => {
  const notes = [
    "Phasellus ac ante vel ipsum dictum faucibus. Etiam nec lorem sed arcu aliquam consequat. Donec suscipit aliquet urna, in placerat quam vestibulum non. Sed consectetur sapien vel risus placerat, sit amet ullamcorper libero bibendum. Aenean eleifend purus in velit porta, at vehicula ligula efficitur.",
    "Duis eu neque eu odio ultrices ullamcorper.",
    "Integer tristique massa non lacus faucibus, eget ullamcorper nulla fringilla.",
    "Vivamus varius congue lacus, non laoreet felis ultricies id. Integer viverra volutpat posuere. Sed non arcu at nunc suscipit ultrices sit amet id eros.",
    "Phasellus interdum ligula et commodo pulvinar.",
    "Nulla facilisi. Sed sed leo nec nisi lacinia elementum. Curabitur vel ligula in libero condimentum vestibulum eu nec nisi. In hac habitasse platea dictumst.",
    "Phasellus ac ante vel ipsum dictum faucibus. Etiam nec lorem sed arcu aliquam consequat. Donec suscipit aliquet urna, in placerat quam vestibulum non. Sed consectetur sapien vel risus placerat, sit amet ullamcorper libero bibendum. Aenean eleifend purus in velit porta, at vehicula ligula efficitur.",
    "Sed rutrum nunc eget nunc consectetur, nec sollicitudin nisi hendrerit."
  ];

  return notes;
};

export default async function Home() {
  const notes = fetchNotes();

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-4 lg:px-24 py-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Solace Note Mingle
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/visionaricy"
            target="_blank"
            rel="noopener noreferrer"
          >
            By visionaricy
          </a>
        </div>
      </div>

      <div className="mb-32">
        <NewNoteButton />
        <Notes notesPromise={notes} />
        <NewNoteButton />
      </div>
    </main>
  );
}
