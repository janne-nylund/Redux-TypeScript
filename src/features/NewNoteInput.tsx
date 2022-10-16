import React from "react";
import { useState } from "react";

interface Props {
  onAddNote: (note: string) => void;
}

const NewNoteInput: React.FC<Props> = ({ onAddNote }) => {
  const [note, setNote] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddNote(note);
    setNote("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Write something..."
          autoComplete="off"
          spellCheck="false"
        />
        <button className="btn-add" type="submit">
          Add note
        </button>
      </form>
    </div>
  );
};

export default NewNoteInput;
