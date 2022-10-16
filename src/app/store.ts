import { createStore, combineReducers } from "redux";
import notesReducer from "../reducers/notesReducer";
import notificationReducer from "../reducers/notificationReducer";
import filterReducer from "../reducers/filterReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  notification: notificationReducer,
  filter: filterReducer
});

export const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: e.g. {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
