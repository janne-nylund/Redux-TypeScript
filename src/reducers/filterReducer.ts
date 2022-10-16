import { NoteAction } from "../app/actions";

interface filterState {
  filter: Filter;
}

export type Filter = "all" | "regular" | "important";

const initialState: filterState = {
  filter: "all"
};

const filterReducer = (state = initialState, action: NoteAction) => {
  switch (action.type) {
    case "SET_FILTER": {
      return { ...state, filter: action.payload };
    }
    default:
      return state;
  }
};

export default filterReducer;
