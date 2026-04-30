import { useEffect, useState } from "react";
import { fetchGuestById } from "./api";

// Renders full details for a selected guest
export default function GuestDetails({ id, onBack }) {
  const [guest, setGuest] = useState(null);

  // Fetch guest details when the ID changes
  useEffect(() => {
    async function loadGuest() {
      const data = await fetchGuestById(id);
      setGuest(data);
    }
    loadGuest();
  }, [id]);

  if (!guest) return <p>Loading guest details...</p>;

  return (
    <div>
      <h2>{guest.name}</h2>

      <p><strong>Email:</strong> {guest.email}</p>
      <p><strong>Phone:</strong> {guest.phone}</p>
      <p><strong>Job:</strong> {guest.job}</p>
      <p><strong>Bio:</strong> {guest.bio}</p>

      <button onClick={onBack}>Back</button>
    </div>
  );
}