"use client";

interface Song {
  id: number;
  title: string;
  artist: string;
  cover?: string;
}

export default function Playlist({
  songs,
  currentIndex,
  onSelect,
}: {
  songs: Song[];
  currentIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-6 max-h-[70vh] overflow-y-auto">
      {songs.length === 0 && (
        <p className="text-gray-400">No songs found</p>
      )}

      {songs.map((song, index) => (
        <div
          key={song.id}
          onClick={() => onSelect(index)}
          className={`flex items-center gap-3 p-2 rounded cursor-pointer mb-1 hover:bg-gray-600 transition ${
            index === currentIndex ? "bg-white text-black" : "bg-gray-800"
          }`}
        >
          <img
            src={song.cover || "/images/cd.png"}
            className="w-12 h-12 object-cover rounded"
          />
          <div className="flex flex-col overflow-hidden">
            <p className="truncate">{song.title}</p>
            <p className="text-xs text-gray-400 truncate">{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
