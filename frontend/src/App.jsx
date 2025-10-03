import { useState } from 'react';
import './App.css'

function App() {
  return (
   <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start">
    {/*header*/}
    <header className="w-full bg-indigo-600 text-white p-4 shadow-md">
      <h1 className="text-2x1 font-bold text-center">Inventory app for robotics</h1>
    </header>

    {/* Main header gang */}
    <main className="w-full max-w-4xl p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <p className="text-gray-600">
          Welcome! Inventory Items will appear here.
        </p>
      </div>
    </main>
   </div> 
   
  );
}

export default App;
