import { FaStar, FaStarHalf } from 'react-icons/fa';
import { BsStar, BsStarFill } from 'react-icons/bs';

const HalfStar = ({ color1, color2 }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <FaStar style={{ color: color1 }} />
      <FaStarHalf
        style={{
          position: 'absolute',
          left: 0,
          top: 6,
          
          overflow: 'hidden',
          color: color2,
        }}
      />
    </div>
  );
};

const Rating = ({ rating, color1, color2 }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar style={{ color: 'gold' }} key={i} />);
  }

  if (halfStars) {
    stars.push(<HalfStar color1="gray" color2="gold" key={stars.length} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<BsStarFill style={{ color: 'gray' }} key={stars.length} />);
  }

  return <div>{stars}</div>;
};

export default Rating;



// another
// import React from "react";

// const Rating = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const halfStars = Math.round(rating - fullStars);
//   const emptyStars = 5 - fullStars - halfStars;

//   const starIcon = (filled) => {
//     return (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 100 100"
//         fill={filled ? "yellow" : "none"}
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="feather feather-star"
//       >
//         <polygon
//           points="12 2 15.09 8.35 22 9.27 17 14.16 18.18 21 12 17.77 5.82 21 7 14.16 2 9.27 8.91 8.35 12 2"
//         ></polygon>
//       </svg>
//     );
//   };

//   const stars = [];
//   for (let i = 0; i < fullStars; i++) {
//     stars.push(starIcon(true));
//   }
//   if (halfStars) {
//     stars.push(starIcon(false));
//   }
//   for (let i = 0; i < emptyStars; i++) {
//     stars.push(starIcon(false));
//   }

//   return <div>{stars}</div>;
// };

// export default Rating;
