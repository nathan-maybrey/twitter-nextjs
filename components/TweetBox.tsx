import React from 'react';
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon
} from "@heroicons/react/outline";

const TweetBox = () => {
  return (
    <div className={"flex space-x-2 p-5 items-center"}>
      <img
        className={"h-14 w-14 object-cover rounded-full mt-4"}
        src="http://notarealhuman.com/face"
        alt=""
      />

      <div className={"flex flex-1 items-center pl-2"}>
        <form className={"flex flex-1 flex-col"} action="#">
          <input className={"h-24 w-full text-xl outline-none placeholder:text-xl"} type="text" placeholder={"What's Happening?"}/>
          <div className={"flex items-center"}>
            <div className={"flex space-x-2 text-twitter flex-1"}>
              {/* Icons */}
              <PhotographIcon className={"h-5 w-5"} />
              <SearchCircleIcon className={"h-5 w-5"} />
              <EmojiHappyIcon className={"h-5 w-5"} />
              <CalendarIcon className={"h-5 w-5"} />
              <LocationMarkerIcon className={"h-5 w-5"} />
            </div>
            <button className={"bg-twitter px-5 py-2 font-bold text-white rounded-full"}>Tweet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
