"use client";

export default function Search({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <input
      type="text"
     placeholder="Search by song, artist or category..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border rounded mb-3"
    />
  );
}
