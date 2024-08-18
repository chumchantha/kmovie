"use client";

// components/SimpleVideoPlayer.tsx
import React, { useRef, useState, useEffect } from "react";

interface SimpleVideoPlayerProps {
  src: string;
  poster?: string;
}

const SimpleVideoPlayer: React.FC<SimpleVideoPlayerProps> = ({
  src,
  poster,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.addEventListener("loadedmetadata", () => {
        setDuration(video.duration);
      });
      return () => {
        video.removeEventListener("loadedmetadata", () => {
          setDuration(video.duration);
        });
      };
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime =
        (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
        const percent =
          (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percent);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black">
      <video
        ref={videoRef}
        className="w-full h-auto"
        src={src}
        poster={poster}
        onContextMenu={(e) => e.preventDefault()} // Disable right-click
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center justify-between">
          <button onClick={togglePlayPause} className="text-white">
            {isPlaying ? "Pause" : "Play"}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="flex-1 mx-2"
          />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-1/4"
          />
          <div className="text-white mx-2">
            {Math.floor(currentTime / 60)}:
            {Math.floor(currentTime % 60)
              .toString()
              .padStart(2, "0")}{" "}
            / {Math.floor(duration / 60)}:
            {Math.floor(duration % 60)
              .toString()
              .padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleVideoPlayer;
