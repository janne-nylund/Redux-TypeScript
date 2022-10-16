import NotificationDisplay from "./NotificationDisplay";
import NoteList from "./NoteList";
import NewNoteInput from "./NewNoteInput";
import FilterControls from "./FilterControls";
import { useHandleNote } from "../hooks/useHandleNote";

const Notes = () => {
  const {
    onAddNote,
    onDeleteNote,
    onToggle,
    onSetFilter,
    filterNotes
  } = useHandleNote();

  return (
    <>
      <NewNoteInput onAddNote={onAddNote} />
      <NotificationDisplay />
      <FilterControls onSetFilter={onSetFilter} />
      <NoteList
        onDeleteNote={onDeleteNote}
        onToggle={onToggle}
        filterNotes={filterNotes}
      />
    </>
  );
};

export default Notes;
