import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          <Avatar src="https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/136963533_2039075286234059_3318438446571206391_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEt6wzo2LabkF8jUnu5ehRDM2-qPmH_IGUzb6o-Yf8gZT9P31XuCqrcpDMHB-WnITwsQgqTn-mtM-UP7IeWqwwH&_nc_ohc=2SBgZn5278AAX-lC9b9&_nc_ht=scontent.famm9-1.fna&oh=d377bb5f653061491fe990041b334b11&oe=60357BAC" />
        </IconButton>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text"></input>
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
