import React from 'react';
import { Grid } from '../../components/Grid/Grid';

export function Posts() {
  return (
    <Grid
      items={[
        {
          id: '01',
          favorite: true,
          title: "Wolt voted Europe's hottest startup Tech5's 2020 competition",
          author: 'Vladimir Carver',
        },
        {
          id: '02',
          favorite: false,
          title: "Wolt voted Europe's hottest startup Tech5's 2020 competition",
          author: 'Vladimir Carver',
        },
      ]}
    />
  );
}
