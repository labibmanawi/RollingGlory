import React from 'react';
import { Badge } from 'react-bootstrap';

const Label = ({ rating, numOfReviews, isNew }) => {
  let badgeText = '';
  let color;

  if (isNew) {
    badgeText = 'new';
    color = 'yellow';
  }

  if (rating >= 4 && numOfReviews > 25) {
    badgeText = 'best seller';
    color = 'blue';
  }

  if (rating >= 4 && numOfReviews > 25 && isNew) {
    badgeText = 'hot item';
    color = 'red';
  }

  return (
    <Badge  style={{ color }}><span>{badgeText}</span></Badge>
    

  );
};

export default Label;
