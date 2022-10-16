import { NoteAction } from "../app/actions";

interface NotificationState {
  notification: Notification;
}

export interface Notification {
  message: string;
  type: "ADD" | "DELETE" | undefined;
}

const initialState: NotificationState = {
  notification: { message: "", type: undefined }
};

const notificationReducer = (state = initialState, action: NoteAction) => {
  switch (action.type) {
    case "SET_NOTIFICATION": {
      return {
        ...state,
        notification: {
          message: action.payload.message,
          type: action.payload.type
        }
      };
    }
    default:
      return state;
  }
};

export default notificationReducer;
