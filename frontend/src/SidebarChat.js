import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/100089305_1826528957488694_1799697099248369664_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_eui2=AeGvtniwTkjHhxzL87nFKd5vEHFWxUfqjAoQcVbFR-qMCjcSrztnH2xZPf65CkV2r1rLUe7EaZUO9uxvuW4lDQdU&_nc_ohc=XiiatGYC79kAX_m920M&_nc_ht=scontent.famm9-1.fna&oh=e244dcebf6b16f64536c6fba7c02e2de&oe=6032D591"/>
      <div className="sidebarChat__info">
        <h2>Mira</h2>
        <p>I created new whatsapp!</p>
      </div>
    </div>
  );
}

export default SidebarChat;
