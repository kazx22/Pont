"use client";
import React, { useEffect } from "react";

const Video = ({ link }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      ((d, s, id) => {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }, []);
  return (
    <div>
      <div
        className="fb-video"
        data-href={link}
        data-width="500"
        data-show-text="false"
      >
        <blockquote cite={link} className="fb-xfbml-parse-ignore">
          <a href={link}>Watch</a>
        </blockquote>
      </div>
    </div>
  );
};

export default Video;
