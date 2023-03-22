'use client';

import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';
import { deathByPeriods } from '../utils/dates';
import { Cases } from '../types';

interface Props {
  data: Cases[];
}

export default function G2DeathByPeriods({ data: dataProp }: Props) {
  const container = useRef<HTMLDivElement | null>(null);
  const chart = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chart.current) {
      chart.current = renderBarChart(container.current);
    }
  }, []);

  const data = deathByPeriods(dataProp);

  function renderBarChart(container: HTMLDivElement) {
    const chart = new Chart({
      container,
      width: 400,
      height: 320,
    });

    chart
      .interval()
      .data(data)
      .encode('x', 'period') 
      .encode('y', 'number') 
      .encode('key', 'period'); 

    chart.render();

    return chart;
  }

  return (
    
      <div ref={container}></div>
    
  );
}
