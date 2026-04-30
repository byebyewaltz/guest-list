// Renders a list of guests with click-to-select behavior
export default function GuestList({ guests, onSelect }) {
    return (
      <div>
        <h2>Guest List</h2>
  
        {guests.length === 0 && <p>Loading guests...</p>}
  
        <ul>
          {guests.map((guest) => (
            <li
              key={guest.id}
              onClick={() => onSelect(guest.id)}
              className="guest-list-item"
            >
              <strong>{guest.name}</strong>
              <br />
              {guest.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }