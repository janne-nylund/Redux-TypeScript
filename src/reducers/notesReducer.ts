import { NoteAction } from "../app/actions";

interface NotesState {
  notes: Note[];
}

export interface Note {
  id: string;
  text: string;
  important: boolean;
}

const initialState: NotesState = {
  notes: [
    { id: "asdasd12", text: "Hello Redux", important: true },
    { id: "ghjghj34", text: "This is TypeScript", important: true },
    { id: "zcxzcx56", text: "And these are notes", important: false },
  ],
};

const notesReducer = (state = initialState, action: NoteAction) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case "DELETE_NOTE": {
      const newNotes = [
        ...state.notes.filter((note) => note.id !== action.payload.id),
      ];
      return { ...state, notes: [...newNotes] };
    }
    case "TOGGLE_IMPORTANT": {
      const note = state.notes.find((note) => note.id === action.payload);
      const toggledNote = note ? { ...note, important: !note.important } : note;
      return {
        ...state,
        notes: [
          ...state.notes.map((note) => {
            return note.id === toggledNote?.id ? toggledNote : note;
          }),
        ],
      };
    }
    default:
      return state;
  }
};

export default notesReducer;
