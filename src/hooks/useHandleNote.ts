import { useAppDispatch } from "../app/hooks";
import {
  addNote,
  setNotification,
  deleteNote,
  toggleImportant,
  setFilter
} from "../app/actions";
import { v4 as uuid } from "uuid";
import { Note } from "../reducers/notesReducer";
import { Notification } from "../reducers/notificationReducer";
import { Filter } from "../reducers/filterReducer";

// timer to keep track of current setTimeout for ClearTimeout
// initialized outside of component so that value is kept on re-render
let timer: NodeJS.Timeout;

// MAYBE BREAK THIS UP INTO 4 CUSTOM HOOKS
// useAddNote, useDeleteNote, useToggle, useSetFilter
export const useHandleNote = () => {
  const dispatch = useAppDispatch();

  const showNotification = (
    notificationMessage: Notification["message"],
    notificationType: Notification["type"]
  ) => {
    clearTimeout(timer);
    dispatch(
      setNotification({ message: notificationMessage, type: notificationType })
    );
    timer = setTimeout(() => {
      dispatch(setNotification({ message: ``, type: undefined }));
    }, 3000);
  };

  const onAddNote = (note: string) => {
    if (note.length >= 1) {
      dispatch(addNote({ id: uuid(), text: note, important: false }));
      showNotification(`${note}`, "ADD");
    }
  };

  const onDeleteNote = (note: Note) => {
    dispatch(deleteNote(note));
    showNotification(`${note.text}`, "DELETE");
  };

  const onToggle = (id: string) => {
    dispatch(toggleImportant(id));
  };

  const onSetFilter = (filter: Filter) => {
    dispatch(setFilter(filter));
  };

  const filterNotes = (notes: Note[], filter: Filter) => {
    if (filter === "regular") {
      return notes.filter((note) => note.important === false);
    }
    if (filter === "important") {
      return notes.filter((note) => note.important === true);
    }
    return notes;
  };

  return { onAddNote, onDeleteNote, onToggle, onSetFilter, filterNotes };
};
