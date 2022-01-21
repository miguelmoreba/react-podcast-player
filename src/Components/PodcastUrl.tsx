import React, { useState } from "react";
import { parseEpisodeUrl } from "../Library/podcastUrlTranslator";

export const PodcastUrl = () => {
  const [sanitisedUrl, setSanitisedUrl] = useState("");

  const handleUrlInput = async (myUrl: string) => {
    const url = await parseEpisodeUrl(myUrl);
    setSanitisedUrl(url);

  }

  const renderPlayer = () => {
    if (!sanitisedUrl) {
      return <p>Please enter a valid url</p>;
    } else {
      return (
        <div style={{ marginTop: "20px" }} className="flex-element">
          <audio id="audio-player" controls src={sanitisedUrl}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
      );
    }
  };

  return (
    <div className="box">
      <input
        type="text"
        className="flex-element"
        onInput={async (e: React.ChangeEvent<HTMLInputElement>) => {

          await handleUrlInput(e.target.value)
        }}
      />
      {renderPlayer()}
    </div>
  );
};
