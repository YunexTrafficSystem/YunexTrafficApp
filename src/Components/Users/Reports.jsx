import * as React from 'react';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Reporte</Title>
    </React.Fragment>
  );
}