import React from "react";
import { useAppSelector } from "../app/hooks";
import { Filter } from "../reducers/filterReducer";

interface Props {
  onSetFilter: (filter: Filter) => void;
}

const FilterControls: React.FC<Props> = ({ onSetFilter }) => {
  const filter = useAppSelector((state) => state.filter.filter);
  const notes = useAppSelector((state) => state.notes.notes);

  return (
    <>
      {notes.length > 0 && (
        <div>
          <button
            className="filter-btn"
            disabled={filter === "all"}
            onClick={() => onSetFilter("all")}
          >
            All
          </button>
          <button
            className="filter-btn"
            disabled={filter === "regular"}
            onClick={() => onSetFilter("regular")}
          >
            Regular
          </button>
          <button
            className="filter-btn"
            disabled={filter === "important"}
            onClick={() => onSetFilter("important")}
          >
            Important
          </button>
        </div>
      )}
    </>
  );
};

export default FilterControls;
