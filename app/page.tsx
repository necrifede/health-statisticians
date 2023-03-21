'use client';
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import ContentArea from './components/ContentArea';

interface Cases {
  date: string;
  areaName: string;
  areaCode: string;
  confirmedRate: number;
  latestBy: number;
  confirmed: number;
  deathNew: number;
  death: number;
  deathRate: number;
}

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","confirmedRate":"cumCasesByPublishDateRate","confirmedNew":"newCasesByPublishDate","confirmed":"cumCasesByPublishDate","deathNew":"newDeaths28DaysByPublishDate","death":"cumDeaths28DaysByPublishDate","deathRate":"cumDeaths28DaysByPublishDateRate","latestBy": "newCasesByPublishDate"}&format=json&page=1'
    )
      .then((data) => data.json())
      .then((response) => {
        const { data, ...rest } = response;
        console.log('rest: ', rest);
        setData(data ?? []);
      });
  }, []);

  return (
    <main className={styles.main}>
      <ContentArea />
      <div>lenght: {data.length}</div>
    </main>
  );
}
