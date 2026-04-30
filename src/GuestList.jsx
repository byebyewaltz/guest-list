// Renders a list of guests in a 3-column layout: Name, Email, Phone
export default function GuestList({ guests, onSelect }) {
    return (
      <div>
        <h2>Guest List</h2>
  
        {guests.length === 0 && <p>Loading guests...</p>}
  
        {/* Column headers */}
        <div className="guest-table-header">
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
        </div>
  
        <ul>
          {guests.map((guest) => (
            <li
              key={guest.id}
              onClick={() => onSelect(guest.id)}
              className="guest-list-item"
            >
              <span className="guest-cell name">{guest.name}</span>
              <span className="guest-cell email">{guest.email}</span>
              <span className="guest-cell phone">{guest.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  