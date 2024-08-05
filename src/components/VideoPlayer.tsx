"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playerRef.current) return;

    const playerInstance = (window as any).jwplayer(playerRef.current).setup({
      // file: `https://cdn.jwplayer.com/videos/${videoId}.mp4`,
      file: `https://cdn.jwplayer.com/videos/${videoId}.mp4`,
      width: "100%",
      aspectratio: "16:9",
    });

    return () => {
      playerInstance.remove();
    };
  }, [videoId]);

  return <div ref={playerRef} />;
};

export default VideoPlayer;
