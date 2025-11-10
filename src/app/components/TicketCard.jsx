'use client';

export default function TicketCard({ ticket, isQueued, onAdd }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-gray-900 mb-2">
        {ticket.title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
        {ticket.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
          {ticket.priority}
        </span>
        <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
          {ticket.status}
        </span>
      </div>
      
      <div className="text-sm text-gray-600 mb-3">
        <div>Assignee: {ticket.assignee}</div>
        <div>Updated: {new Date(ticket.updatedAt).toLocaleString()}</div>
      </div>
      
      <div className="space-y-2">
        <button
          onClick={onAdd}
          disabled={isQueued}
          className={`w-full px-3 py-2 rounded text-sm font-medium transition-colors ${
            isQueued
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Add to My Queue
        </button>
        
        {isQueued && (
          <p className="text-xs text-gray-500 text-center">
            Already in My Queue
          </p>
        )}
      </div>
    </div>
  );
}