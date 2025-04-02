import React, { useState, useEffect } from "react";
import "./Birthday.css";
const Birthday = () => {
  const [birthdays, setBirthdays] = useState([
    { id: 1, name: "John Doe", date: "2024-03-10" },
    { id: 2, name: "Jane Smith", date: "2024-05-15" },
  ]);
  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");
  const [popup, setPopup] = useState(null);

  const addBirthday = () => {
    if (newName && newDate) {
      setBirthdays([...birthdays, { id: Date.now(), name: newName, date: newDate }]);
      setNewName("");
      setNewDate("");
    }
  };

  const removeBirthday = (id) => {
    setBirthdays(birthdays.filter((bday) => bday.id !== id));
  };

  const processBirthdays = () => {
    alert("Birthday Updated !");
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const upcomingBday = birthdays.find((bday) => bday.date === today);
    if (upcomingBday) {
      setPopup(`Happy Birthday ${upcomingBday.name}!`);
      setTimeout(() => setPopup(null), 3000);
    }
  }, [birthdays]);

  return (
    <div className="app">
      <h2>Birthday Reminder</h2>
      {popup && <div className="popup">{popup}</div>}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <button onClick={addBirthday}>Add Birthday</button>
      </div>
      <div className="birthday-list">
        {birthdays.map((bday) => (
          <div key={bday.id} className="birthday-item">
            <span>
              {bday.name} - {bday.date}
            </span>
            <button onClick={() => removeBirthday(bday.id)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="process-btn" onClick={processBirthdays}>
        Update Birthdays
      </button>
    </div>
  );
};

export default Birthday;
