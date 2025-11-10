'use client';

export default function MyQueueSummary({ queue, tickets, onRemove, onClear }) {
  // Compute queuedIds = Object.keys(queue)
  const queuedIds = Object.keys(queue);
  
  // Derive queuedTickets = tickets.filter(t => queue[t.id])
  const queuedTickets = tickets.filter(t => queue[t.id]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-900">
          My Queue ({queuedIds.length})
        </h3>
        {queuedIds.length > 0 && (
          <button
            onClick={onClear}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Clear Queue
          </button>
        )}
      </div>
      
      {queuedIds.length === 0 ? (
        <p className="text-gray-500 text-sm">No tickets in queue</p>
      ) : (
        <div className="space-y-2">
          {queuedTickets.map(ticket => (
            <div key={ticket.id} className="flex justify-between items-start gap-2">
              <span className="text-sm text-gray-900 flex-1">
                {ticket.title}
              </span>
              <button
                onClick={() => onRemove(ticket.id)}
                className="text-xs text-red-600 hover:text-red-700 font-medium flex-shrink-0"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}