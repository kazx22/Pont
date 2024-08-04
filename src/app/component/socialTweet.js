import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import gt from "../img/pont.jpg";
import Video from "./video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShare } from "@fortawesome/free-solid-svg-icons";

const SocialTweet = () => {
  const [tweets, setTweets] = useState([]);
  const apiKey = "";

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/proxy/2/tweets?ids=10765432100123456789&tweet.fields=created_at,text",
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
            params: {
              ids: "10765432100123456789",
              "tweet.fields": "created_at,text",
            },
          }
        );
        console.log(response.data.data);
        setTweets(response.data.data);
      } catch (error) {
        console.error("Error fetching tweets", error);
      }
    };

    fetchTweets();
  }, [apiKey]);

  return (
    <div>
      {tweets.map((tweet) => (
        <div
          key={tweet.id}
          className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden my-4"
        >
          <div className="flex items-center px-4 py-3">
            <Image
              className="h-12 w-12 rounded-full"
              src={gt}
              alt="User Avatar"
              width={48}
              height={48}
            />
            <div className="ml-3">
              <div className="text-sm font-semibold text-gray-900">PONT</div>
              <div className="text-xs text-gray-600">
                {new Date(tweet.created_at).toLocaleTimeString()}
              </div>
            </div>
          </div>
          <div className="px-4 py-2">
            <p className="text-gray-700">{tweet.text}</p>
          </div>
          <Video link={tweet.link} />
          <div className="px-4 py-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 mt-4">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                  <FontAwesomeIcon icon={faThumbsUp} size="1x" className="" />
                  <span className="text-sm">Like</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M21 16a2 2 0 01-2 2H7l-4 4V6a2 2 0 012-2h14a2 2 0 012 2z"
                    />
                  </svg>
                  <span className="text-sm">Comment</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                  <FontAwesomeIcon icon={faShare} size="1x" className="" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialTweet;
