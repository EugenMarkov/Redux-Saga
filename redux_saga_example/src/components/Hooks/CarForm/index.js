import React, { useState } from "react";

export const NewCarForm = React.memo(({ onSubmit }) => {
  const [name, setCarName] = useState("");
  const [description, setCarDescription] = useState("");

  const handleChange = e => {
    e.preventDefault();
    onSubmit({ name, description });
  };

  return (
    <form onSubmit={handleChange}>
      <input
        placeholder="Car name"
        type="text"
        value={name}
        onChange={event => setCarName(event.target.value)}
      />
      <input
        placeholder="Car description"
        type="text"
        value={description}
        onChange={event => setCarDescription(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
});

const Car = React.memo(({ car, onSell }) => {
  return (
    <div style={{border:"1px solid", margin: 10, padding: 10}}>
      <h3>{car.name}</h3>
      <p>{car.description}</p>
      <div>
        <label>
          <input
            type="checkbox"
            checked={car.sold}
            onChange={() => onSell(car.id)}
          />
          Sold
        </label>
      </div>
    </div>
  );
});

export const Cars = ({ cars = [], onSell }) => {
  return (
    <div>
      <h2>Cars ({cars.length})</h2>
      {cars.map(car => (
        <Car key={car.id} car={car} onSell={onSell} />
      ))}
    </div>
  );
};


