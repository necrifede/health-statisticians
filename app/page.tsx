import styles from './page.module.css';
import ContentArea from './components/ContentArea';

const structure = {
  date: 'date',
  areaName: 'areaName',
  areaCode: 'areaCode',
  deathNew: 'newDeaths28DaysByPublishDate',
};
const host = 'https://api.coronavirus.data.gov.uk';
const query = `/v1/data?filters=areaType=overview&format=json&page=1&structure=${JSON.stringify(structure)}`;

const fetchData = () =>
  fetch(`${host}${query}`)
    .then((res) => res.json())
    .then(({ data }) => data);

export default async function HomePage() {
  const data = await fetchData();
  return (
    <main className={styles.main}>
      <ContentArea data={data} />
    </main>
  );
}
