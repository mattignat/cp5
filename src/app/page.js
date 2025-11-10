import Board from './components/Board';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Helpdesk Ticket Board</h1>
      <Board />
    </main>
  );
}
