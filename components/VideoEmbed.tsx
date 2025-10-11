// src/components/VideoEmbed.tsx
import React from "react";

interface VideoEmbedProps {
  src: string;
  title?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, title = "Embedded video" }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingTop: "56.25%" }}>
      <iframe
        src={src}
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
