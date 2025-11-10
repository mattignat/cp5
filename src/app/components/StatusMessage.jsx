'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  // Precedence: loading → error → isEmpty → null
  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Loading…</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }
  
  if (isEmpty) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No tickets match your filters.</p>
      </div>
    );
  }
  
  return null;
}