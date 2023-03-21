'use client';

import { Chart } from '@antv/g2';

// prepare data
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

// initialize the chart instance
export const chart = new Chart({
  container: 'container',
  theme: 'classic',
});

// declare visualization
chart
  .interval() // create an Interval marker
  .data(data) // bind data
  .encode('x', 'genre') // encode channel x
  .encode('y', 'sold'); // encode y channel

// render the visualization
chart.render();
