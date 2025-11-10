'use client';

import { useState, useEffect } from 'react';
import TicketList from './TicketList';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import { 
  nextStatus, 
  bumpPriority 
} from '../lib/severity';

export default function Board() {
  // State
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearchState] = useState('');
  const [queue, setQueue] = useState({});

  // Effect #1: on mount, fetch /api/tickets; set loading/error; store tickets
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/tickets');
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const tickets = await response.json();
        setTickets(tickets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // Effect #2: setInterval every 6–10s that picks random ticket and updates it
  useEffect(() => {
    if (tickets.length === 0) return;

    const interval = setInterval(() => {
      const randomDelay = Math.random() * 4000 + 6000; // 6-10 seconds
      
      setTimeout(() => {
        setTickets(prevTickets => {
          if (prevTickets.length === 0) return prevTickets;
          
          // Pick a random ticket index
          const randomIndex = Math.floor(Math.random() * prevTickets.length);
          const ticketToUpdate = prevTickets[randomIndex];
          
          let updatedTicket;
          // 50% chance updates status; else updates priority
          if (Math.random() < 0.5) {
            updatedTicket = {
              ...ticketToUpdate,
              status: nextStatus(ticketToUpdate.status),
              updatedAt: new Date().toISOString()
            };
          } else {
            const direction = Math.random() < 0.5 ? 1 : -1; // ±1
            updatedTicket = {
              ...ticketToUpdate,
              priority: bumpPriority(ticketToUpdate.priority, direction),
              updatedAt: new Date().toISOString()
            };
          }
          
          // Immutable update
          const newTickets = [...prevTickets];
          newTickets[randomIndex] = updatedTicket;
          return newTickets;
        });
      }, randomDelay - 6000);
    }, 6000);

    return () => clearInterval(interval);
  }, [tickets.length]);

  // Derived: compute visibleTickets by applying filters and search
  const visibleTickets = tickets.filter(ticket => {
    // Filter by status
    if (filters.status !== 'All' && ticket.status !== filters.status) {
      return false;
    }
    
    // Filter by priority
    if (filters.priority !== 'All' && ticket.priority !== filters.priority) {
      return false;
    }
    
    // Search case-insensitive on title or description
    if (search.trim()) {
      const searchLower = search.toLowerCase().trim();
      const titleMatch = ticket.title.toLowerCase().includes(searchLower);
      const descMatch = ticket.description.toLowerCase().includes(searchLower);
      if (!titleMatch && !descMatch) {
        return false;
      }
    }
    
    return true;
  });

  // Handlers: controlled inputs
  const setStatusFilter = (value) => {
    setFilters(prev => ({ ...prev, status: value }));
  };

  const setPriorityFilter = (value) => {
    setFilters(prev => ({ ...prev, priority: value }));
  };

  const setSearch = (value) => {
    setSearchState(value);
  };

  // onAddToQueue(id): set queue[id] = true (immutably)
  const onAddToQueue = (id) => {
    setQueue(prev => ({ ...prev, [id]: true }));
  };

  // onRemoveFromQueue(id): delete key immutably
  const onRemoveFromQueue = (id) => {
    setQueue(prev => {
      const { [id]: removed, ...rest } = prev;
      return rest;
    });
  };

  // onClearQueue(): set {} and do not duplicate tickets
  const onClearQueue = () => {
    setQueue({});
  };

  return (
    <div className="space-y-6">
      {/* Top grid with filters and queue summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusFilter value={filters.status} onChange={setStatusFilter} />
        <PriorityFilter value={filters.priority} onChange={setPriorityFilter} />
        <SearchBox value={search} onChange={setSearch} />
        <MyQueueSummary 
          queue={queue} 
          tickets={tickets} 
          onRemove={onRemoveFromQueue} 
          onClear={onClearQueue} 
        />
      </div>

      {/* Status message */}
      <StatusMessage 
        loading={loading} 
        error={error} 
        isEmpty={!loading && !error && visibleTickets.length === 0} 
      />

      {/* Ticket list */}
      <TicketList 
        tickets={visibleTickets} 
        queue={queue} 
        onAddToQueue={onAddToQueue} 
      />
    </div>
  );
}