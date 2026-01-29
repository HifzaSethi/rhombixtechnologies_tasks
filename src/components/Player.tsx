"use client";
import { useState, useRef, useEffect } from "react";
import songs from "../data/songs";
import Playlist from "./Playlist";
import Search from "./Search";

export default function Player() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [view, setView] = useState<"playlist" | "full">("playlist");
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filteredSongs = songs.filter(
    (song) =>
      (song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase())) &&
      (category === "All" || song.category === category)
  );

  const currentSong =
    currentIndex !== null ? filteredSongs[currentIndex] : null;

  const playSong = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(true);
    setView("full");
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    if (currentIndex === null) return;
    const nextIndex =
      currentIndex === filteredSongs.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    setIsPlaying(true);
  };

  const prevSong = () => {
    if (currentIndex === null) return;
    const prevIndex =
      currentIndex === 0 ? filteredSongs.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setIsPlaying(true);
  };

  const shuffleSong = () => {
    if (!filteredSongs.length) return;
    const random = Math.floor(Math.random() * filteredSongs.length);
    setCurrentIndex(random);
    setIsPlaying(true);
  };

  const changeVolume = (value: number) => {
    setVolume(value);
    if (audioRef.current) audioRef.current.volume = value;
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const percent =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(percent || 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress((newTime / audioRef.current.duration) * 100);
  };

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const handleEnded = () => nextSong();
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [currentIndex, filteredSongs]);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const handleLoaded = () => setDuration(audio.duration || 0);
    audio.addEventListener("loadedmetadata", handleLoaded);
    return () => audio.removeEventListener("loadedmetadata", handleLoaded);
  }, [currentIndex]);

  return (
    <>
      {/* PLAYLIST VIEW */}
      {view === "playlist" && (
        <div className="min-h-screen bg-black text-white p-4 pb-24">
          <h1 className="text-3xl font-bold mb-3">Playlist</h1>

          <Search search={search} setSearch={setSearch} />

          <div className="flex gap-2 mt-2 flex-wrap">
            {["All", "Pashto", "Islamic", "English", "Urdu",  "Poem"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-2 py-1 rounded text-sm ${
                  category === cat ? "bg-white text-black" : "bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Playlist
            songs={filteredSongs}
            currentIndex={currentIndex ?? -1}
            onSelect={playSong}
          />
        </div>
      )}

      {/* MINI PLAYER */}
      {currentSong && view==="playlist" &&(
        <div
          className="fixed bottom-0 left-0 w-full bg-black text-white p-2 flex flex-col z-50 border-t border-gray-700 cursor-pointer"
          onClick={() => setView("full")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={currentSong.cover || "/images/cd.png"}
                className="w-10 h-10 rounded"
              />
              <div className="flex flex-col overflow-hidden">
                <p className="text-sm truncate w-40">{currentSong.title}</p>
                <p className="text-xs text-gray-400 truncate w-40">
                  {currentSong.artist}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSong();
                }}
                className="text-lg"
              >
                ⏮
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="text-xl"
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSong();
                }}
                className="text-lg"
              >
                ⏭
              </button>
            </div>
          </div>

          <div
            className="w-full h-1 bg-gray-600 rounded mt-1 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleSeek(e);
            }}
          >
            <div
              className="bg-white h-1 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* FULL PLAYER */}
      {currentSong && view === "full" && (
        <div className="min-h-screen bg-black text-white p-4 pt-14 flex flex-col items-center gap-2">
          <button
            onClick={() => setView("playlist")}
            className="self-start mb-2 px-3 py-1 bg-gray-700 rounded"
          >
            ⬇ Back
          </button>

          <div
            className={`w-60 h-60 rounded-full overflow-hidden border-4 ${
              isPlaying ? "animate-spin-slow" : ""
            }`}
          >
            <img
              src={currentSong.cover || "/images/cd.png"}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-xl font-bold mt-2">{currentSong.title}</h2>
          <p className="text-gray-400">{currentSong.artist}</p>

          {/* Progress */}
          <div
            className="w-full bg-gray-600 h-2 rounded mt-2 max-w-md cursor-pointer relative"
            onClick={handleSeek}
          >
            <div
              className="bg-white h-2 rounded"
              style={{ width: `${progress}%` }}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1 w-full">
              <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-2">
            <button onClick={prevSong} className="text-xl">
              ⏮
            </button>
            <button
              onClick={togglePlay}
              className="text-2xl bg-white text-black w-14 h-14 rounded-full"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button onClick={nextSong} className="text-xl">
              ⏭
            </button>
            <button onClick={shuffleSong} className="text-lg">
              🔀
            </button>
          </div>

          {/* Volume */}
          <div className="mt-2 flex items-center gap-2 w-full max-w-md">
            <label className="text-sm">Volume</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => changeVolume(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-xs">{Math.round(volume * 100)}%</span>
          </div>
        </div>
      )}

      {/* AUDIO */}
      {currentSong && (
        <audio
          ref={audioRef}
          src={currentSong.src}
          autoPlay={isPlaying}
          onTimeUpdate={handleTimeUpdate}
        />
      )}
    </>
  );
}
