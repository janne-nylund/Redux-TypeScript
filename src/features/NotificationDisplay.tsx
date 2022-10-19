import React from "react";
import { useAppSelector } from "../app/hooks";

const NotificationDisplay = () => {
  const notification = useAppSelector(
    (state) => state.notification.notification
  );

  return (
    <div
      className={`notification ${
        notification.type === "ADD"
          ? "added"
          : notification.type === "DELETE"
          ? "deleted"
          : null
      }`}
    >
      {!!notification.type && (
        <div>
          <b>
            <i>{notification.message}&nbsp;&nbsp;</i>
          </b>
          <span>
            {notification.type === "ADD"
              ? " added to the list of notes!"
              : " deleted from the list of notes!"}
          </span>
        </div>
      )}
    </div>
  );
};

export default NotificationDisplay;
