import { Button, Card, Space, Avatar } from 'antd';
import {
  DownloadOutlined,
  EditOutlined,
  FilterOutlined,
  CommentOutlined,
  HeartTwoTone,
  HeartOutlined,
  HeartFilled
} from '@ant-design/icons';
import styles from './ContentArea.module.css';
import G2Demo from './G2Demo';

const pageTitle = 'Page Title';

export default function ContentArea() {
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
          title="Chart Title 1"
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
          <p>Card content asfsa fsa as fas fdsa f asdfsaf a safd a asdf sad f safasfasf as as fas fsa fsa fas</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card
          title="Chart Title 2"
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
          <G2Demo />
        </Card>
      </Space>
    </Space>
  );
}
