import React from 'react';
import tw from 'tailwind-styled-components';

const Star = tw.span`text-yellow-500`;
const EmptyStar = tw.span`text-gray-300`;

const Stars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 6 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div>
     {Array.from({ length: fullStars }, (_, i) => (
  <React.Fragment key={`full-${i}`}>
    <Star>★</Star> {/* Unique key for full stars */}
  </React.Fragment>
))}
    {Array.from({ length: emptyStars }, (_, i) => (
  <React.Fragment key={`empty-${i}`}>
    <EmptyStar>★</EmptyStar> {/* Unique key for empty stars */}
  </React.Fragment>
))}
    </div>
  );
};

const App = () => {
  return <Stars rating={4.5} />;
};

export default App;
