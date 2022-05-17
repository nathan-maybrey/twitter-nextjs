import React from 'react';
import {
  BellIcon,
  HomeIcon,
  HashtagIcon,
  MailIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon, UserIcon
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <img className="h-10 w-10 m-3" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="Twitter icon"/>
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign in" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
};

export default Sidebar;
