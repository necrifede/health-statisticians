import { isWithinInterval } from 'date-fns';
import { groupBy, compose, map, reduce, toPairs, reverse } from 'ramda';
import { Cases } from '@/app/types';

const s1of2020 = { start: new Date(2020, 0, 1), end: new Date(2020, 6, 1) };
const s2of2020 = { start: new Date(2020, 6, 1), end: new Date(2021, 0, 1) };
const s1of2021 = { start: new Date(2021, 0, 1), end: new Date(2021, 6, 1) };
const s2of2021 = { start: new Date(2021, 6, 1), end: new Date(2022, 0, 1) };
const s1of2022 = { start: new Date(2022, 0, 1), end: new Date(2022, 6, 1) };
const s2of2022 = { start: new Date(2022, 6, 1), end: new Date(2023, 0, 1) };
const s1of2023 = { start: new Date(2023, 0, 1), end: new Date(2023, 6, 1) };

const byPeriods = groupBy((caseDay: Cases) => {
  const day = new Date(caseDay?.date ?? 0);
  if (isWithinInterval(day, s1of2020)) return 's1of2020';
  if (isWithinInterval(day, s2of2020)) return 's2of2020';
  if (isWithinInterval(day, s1of2021)) return 's1of2021';
  if (isWithinInterval(day, s2of2021)) return 's2of2021';
  if (isWithinInterval(day, s1of2022)) return 's1of2022';
  if (isWithinInterval(day, s2of2022)) return 's2of2022';
  if (isWithinInterval(day, s1of2023)) return 's1of2023';
  throw Error(`Unkwown Interval for date '${day.toDateString()}'`);
});

const labelPeriods = {
  s1of2020: "SEM 1, '20",
  s2of2020: "SEM 2, '20",
  s1of2021: "SEM 1, '21",
  s2of2021: "SEM 2, '21",
  s1of2022: "SEM 1, '22",
  s2of2022: "SEM 2, '22",
  s1of2023: "SEM 1, '23",
};

const countDeaths = (acc: number, caseDay: Cases): number => acc + (caseDay?.deathNew ?? 0);
const toDataTable = ([period, number]: [string, number]) => ({ period, number });
export const deathByPeriods = compose(reverse, map(toDataTable), toPairs, map(reduce(countDeaths, 0)), byPeriods);
