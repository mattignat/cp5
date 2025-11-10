'use client';

export default function StatusFilter({ value, onChange }) {
  const statusOptions = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];

  return (
    <div>
      <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-2">
        Status
      </label>
      <select
        id="status-filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {statusOptions.map(status => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}