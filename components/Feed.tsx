import React from 'react';
import { RefreshIcon } from "@heroicons/react/solid";
import TweetBox from "./TweetBox";

const Feed = () => {
  return (
    <div className={"col-span-7 lg:col-span-5 border-x-2"}>
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon className={"mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-ou hover:rotate-180 active:scale-125"}/>
      </div>

      {/* Tweet Box */}
      <div>
        <TweetBox />
      </div>
    </div>
  );
};

export default Feed;
