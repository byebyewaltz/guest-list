import { useState, useEffect } from "react";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";
import { fetchGuests } from "./api";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  useEffect(() => {
    async function loadGuests() {
      const data = await fetchGuests();
      setGuests(data);
    }
    loadGuests();
  }, []);

  return (
    <div className="app-container">
      {selectedGuestId === null ? (
        <GuestList guests={guests} onSelect={setSelectedGuestId} />
      ) : (
        <GuestDetails
          id={selectedGuestId}
          onBack={() => setSelectedGuestId(null)}
        />
      )}
    </div>
  );
}
