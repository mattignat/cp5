'use client';

export default function PriorityFilter({ value, onChange }) {
  const priorityOptions = ['All', 'Low', 'Medium', 'High', 'Critical'];

  return (
    <div>
      <label htmlFor="priority-filter" className="block text-sm font-medium text-gray-700 mb-2">
        Priority
      </label>
      <select
        id="priority-filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {priorityOptions.map(priority => (
          <option key={priority} value={priority}>
            {priority}
          </option>
        ))}
      </select>
    </div>
  );
}