import React from 'react';
import '../styles/Neighborhood.css';

const Neighborhood = () => {
  return (
    <div className="Neighborhood">
      <div className="Neighborhood__container container">
        <h2 className="Neighborhood__header header">Neighborhood</h2>
        <div className="Neighborhood__description">
          Over a century ago, the most ambitious and talented developers,
          planners, landscape architects and architects came together to create
          a residence park, St. Francis Wood, worthy of its setting in one of
          the world's most beautiful cities, San Francisco. St. Francis Wood is
          listed on the National Register of Historic Districts.
        </div>
      </div>
    </div>
  );
};

export default Neighborhood;
