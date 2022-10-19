import { Note } from "../reducers/notesReducer";
import { Notification } from "../reducers/notificationReducer";
import { Filter } from "../reducers/filterReducer";

export type NoteAction =
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "DELETE_NOTE"; payload: Note }
  | { type: "TOGGLE_IMPORTANT"; payload: string }
  | { type: "SET_NOTIFICATION"; payload: Notification }
  | { type: "SET_FILTER"; payload: Filter };

// return an action object
export const addNote = (note: Note): NoteAction => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};

// alternative way to return an action object
export const deleteNote = (note: Note): NoteAction => ({
  type: "DELETE_NOTE",
  payload: note,
});

export const toggleImportant = (id: string): NoteAction => ({
  type: "TOGGLE_IMPORTANT",
  payload: id,
});

export const setNotification = (notification: Notification): NoteAction => ({
  type: "SET_NOTIFICATION",
  payload: notification,
});

export const setFilter = (filter: Filter): NoteAction => ({
  type: "SET_FILTER",
  payload: filter,
});
