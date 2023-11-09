import React from "react";
import TourCard from "../tourcard/TourCard";

function Tours({ tours, removeTour, selectTour }) {
  return (
    <div className="tours">
      <h2 className="heading">Plan With Aaditya</h2>
      <div className="cardsSet">
        {/* use of map function with return function */}
        {tours.map((tour) => {
          return (
            <TourCard
              {...tour}
              key={tour.id}
              selectTour={selectTour}
              removeTour={removeTour}
            />
          );
        })}

        {/* map function without using return function */}
        {/* {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} selectTour={selectTour}
              removeTour={removeTour}/>
        ))} */}
      </div>
    </div>
  );
}

export default Tours;
