export const priorityOrder = { Low: 0, Medium: 1, High: 2, Critical: 3 };

export const statusOrder = { Open: 0, 'In Progress': 1, 'On Hold': 2, Resolved: 3 };

// Helper function to advance status but keep Resolved at Resolved
export const nextStatus = (s) => {
  const statusKeys = Object.keys(statusOrder);
  const currentIndex = statusOrder[s];
  
  if (currentIndex === undefined || s === 'Resolved') {
    return s; // Keep Resolved at Resolved
  }
  
  const nextIndex = Math.min(currentIndex + 1, statusKeys.length - 1);
  return statusKeys[nextIndex];
};

// Helper function to bump priority with direction (+1 or -1), clamped between Low..Critical
export const bumpPriority = (p, dir) => {
  const priorityKeys = Object.keys(priorityOrder);
  const currentIndex = priorityOrder[p];
  
  if (currentIndex === undefined) {
    return p;
  }
  
  const newIndex = Math.max(0, Math.min(priorityKeys.length - 1, currentIndex + dir));
  return priorityKeys[newIndex];
};

// Helper function to get CSS classes for priority styling
export const getPriorityStyles = (priority) => {
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
  switch (priority) {
    case 'Critical':
      return `${baseClasses} bg-red-100 text-red-800`;
    case 'High':
      return `${baseClasses} bg-orange-100 text-orange-800`;
    case 'Medium':
      return `${baseClasses} bg-yellow-100 text-yellow-800`;
    case 'Low':
      return `${baseClasses} bg-green-100 text-green-800`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-800`;
  }
};

// Helper function to get CSS classes for status styling
export const getStatusStyles = (status) => {
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
  switch (status) {
    case 'Open':
      return `${baseClasses} bg-blue-100 text-blue-800`;
    case 'In Progress':
      return `${baseClasses} bg-purple-100 text-purple-800`;
    case 'On Hold':
      return `${baseClasses} bg-yellow-100 text-yellow-800`;
    case 'Resolved':
      return `${baseClasses} bg-green-100 text-green-800`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-800`;
  }
};