import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Auctions() {
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, 'auctions'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPets(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-3xl font-bold mb-6">🐾 Live Pet Auctions</h2>
      {loading ? (
        <p>Loading auctions...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <div key={pet.id} className="border rounded-lg shadow hover:shadow-lg transition p-4">
              <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
              <p className="text-gray-600 mb-1">Current Bid: <strong>{pet.currentBid || '0 THB'}</strong></p>
              <p className="text-gray-500 text-sm">Ends in: {pet.endsIn || '—'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
