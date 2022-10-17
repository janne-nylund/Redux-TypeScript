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
      <b>
        <i>
          {!!notification.message ? `'${notification.message}'` : " "}
          &nbsp;&nbsp;
        </i>
      </b>
      {notification.type === "ADD"
        ? " added to the list of notes!"
        : notification.type === "DELETE"
        ? " deleted from the list of notes!"
        : null}
    </div>
  );
};

export default NotificationDisplay;
