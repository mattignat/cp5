'use client';

export default function SearchBox({ value, onChange }) {
  return (
    <div>
      <label htmlFor="search-box" className="block text-sm font-medium text-gray-700 mb-2">
        Search
      </label>
      <input
        id="search-box"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search title or description…"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}