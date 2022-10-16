import React from "react";
import { useAppSelector } from "../app/hooks";

import styled from "styled-components";
import { Trash } from "@styled-icons/boxicons-regular/Trash";

import { Note } from "../reducers/notesReducer";
import { Filter } from "../reducers/filterReducer";

const Delete = styled(Trash)`
  color: gray;
  height: 24px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

interface Props {
  onDeleteNote: (note: Note) => void;
  onToggle: (note: string) => void;
  filterNotes: (notes: Note[], filter: Filter) => Note[];
}

const NoteList: React.FC<Props> = ({ onDeleteNote, onToggle, filterNotes }) => {
  const notes = useAppSelector((state) => state.notes.notes);
  const filter = useAppSelector((state) => state.filter.filter);

  const notesToShow = filterNotes(notes, filter);

  return (
    <div className="notes-wrapper">
      {notesToShow.map((note) => (
        <div className="note" key={note.id}>
          <span className={`${note.important ? "important" : null}`}>
            {note.text}
          </span>
          <label className="toggle">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => onToggle(note.id)}
              defaultChecked={note.important}
            />
            <span className="toggle" />
          </label>
          <Delete onClick={() => onDeleteNote(note)} />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
