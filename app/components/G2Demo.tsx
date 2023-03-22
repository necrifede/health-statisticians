'use client';

import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';
import { deathByPeriods } from '../utils/dates';
import { Cases } from '../types';

interface Props {
  data: Cases[];
}

export default function G2Demo({ data: dataProp }: Props) {
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
      paddingLeft: 35,
    });

    chart.coordinate({ type: 'theta', innerRadius: 0.25, outerRadius: 0.8 });

    chart
      .interval()
      .data(data)
      .transform({ type: 'stackY' })
      .encode('y', 'number')
      .encode('color', 'period')
      .scale('color', {
        range: ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#61cdbb'],
      })
      .label({
        text: 'number',
        style: {
          fontWeight: 'bold',
          offset: 14,
        },
      })
      .label({
        text: 'period',
        position: 'spider',
        connectorDistance: 0,
        style: {
          fontWeight: 'bold',
          textBaseline: 'bottom',
          textAlign: (d: { period: string; number: number }) =>
            ['s1of2022', 's2of2021', 's1of2021'].includes(d.period) ? 'end' : 'start',
          dy: -4,
        },
      })
      .style('stroke', '#fff')
      .animate('enter', { type: 'waveIn' })
      .style('radius', 4)
      .legend(false);

    chart.render();

    return chart;
  }

  return <div ref={container}></div>;
}
