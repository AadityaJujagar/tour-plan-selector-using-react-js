import Tours from "./components/tours/Tours";
import { data } from "./data";
import React, { useState } from "react";

function App() {
  const [tours, setTours] = useState(data);

  const selectTour = (id) => {
    const selectedTour = tours.filter((tour) => tour.id === id);
    setTours(selectedTour);
  };

  const removeTour = (id) => {
    const remainingTours = tours.filter((tour) => tour.id !== id);
    setTours(remainingTours);
  };

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btnWhite" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} selectTour={selectTour} removeTour={removeTour} />
    </div>
  );
}

export default App;
