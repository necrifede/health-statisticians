'use client';
import { Button, Card, Space, Avatar } from 'antd';
import {
  DownloadOutlined,
  EditOutlined,
  FilterOutlined,
  CommentOutlined,
  HeartTwoTone,
  HeartOutlined,
} from '@ant-design/icons';
import styles from './ContentArea.module.css';
import G2Demo from './G2Demo';
import G2DeathByPeriods from './G2DeathByPeriods';

const pageTitle = 'Page Title';

export default function ContentArea({ data = [] }) {
  return (
    <Space className={styles.contentArea} direction="vertical" size={16}>
      <Space className={styles.titlePage}>
        <div>{pageTitle}</div>
        <div>
          <Button>Export to PDF {<DownloadOutlined />}</Button>
          <Button>Notes {<EditOutlined />}</Button>
          <Button>Filter {<FilterOutlined />}</Button>
        </div>
      </Space>
      <Space className={styles.chartsArea}>
        <Card
          title="Deaths per semester"
          style={{ maxWidth: '36rem' }}
          actions={[
            <div key="actions" className={styles.actions}>
              <Avatar size="small" src="https://joesch.moe/api/v1/random" />
              <span className={styles.actionIcons}>
                <HeartTwoTone style={{ fontSize: '1.3rem' }} twoToneColor="#eb2f96" />
                <CommentOutlined style={{ fontSize: '1.3rem' }} />
              </span>
            </div>,
          ]}
        >
          <G2DeathByPeriods data={data} />
        </Card>
        <Card
          title="Deaths by proportion"
          style={{ maxWidth: '36rem' }}
          actions={[
            <div key="actions" className={styles.actions}>
              <Avatar size="small" src="https://joesch.moe/api/v1/random" />
              <span className={styles.actionIcons}>
                <HeartOutlined style={{ fontSize: '1.3rem' }} />
                <CommentOutlined style={{ fontSize: '1.3rem' }} />
              </span>
            </div>,
          ]}
        >
          <G2Demo data={data} />
        </Card>
      </Space>
    </Space>
  );
}
