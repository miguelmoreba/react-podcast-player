import React, { useState } from "react";

export const PodcastUrl = () => {
  const [sanitisedUrl, setSanitisedUrl] = useState("");

  const renderPlayer = () => {
    if (sanitisedUrl === "") {
      return;
    } else if (!sanitisedUrl) {
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
        value={sanitisedUrl}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSanitisedUrl(e.target.value)}
      />
      {renderPlayer()}
    </div>
  );
};
