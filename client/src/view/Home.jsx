import { useState } from 'react';

import {
  Card,
  Col,
  Row,
  Typography,
  Button,
  Timeline,
} from 'antd';
import {
  MenuUnfoldOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Paragraph from 'antd/lib/typography/Paragraph';

import Echart from '../Components/Chart/EChart';
import LineChart from '../Components/Chart/LineChart';

import { TruckLoading } from '@styled-icons/fa-solid'
import { PackageIcon, PackageDependencies, PackageDependents } from '@styled-icons/octicons'

import card from '../assets/images/info-card-1.jpg';

function Home() {
  const { Title, Text } = Typography;

  const [reverse, setReverse] = useState(false);


  const count = [
    {
      today: 'Today’s Shipment',
      title: '100',
      persent: '+30%',
      icon: <TruckLoading size={20}/>,
      bnb: 'bnb2',
    },
    {
      today: 'Shipment Inbound',
      title: '3,200',
      persent: '+20%',
      icon: <PackageDependencies size={20}/>,
      bnb: 'bnb2',
    },
    {
      today: 'Shipment Outbound',
      title: '+1,200',
      persent: '-20%',
      icon: <PackageDependents size={20}/>,
      bnb: 'redtext',
    },
    {
      today: 'Total Package',
      title: '$13,200',
      persent: '10%',
      icon: <PackageIcon size={20}/>,
      bnb: 'bnb2',
    },
  ];

  const list = [
    {
      Title: 'TESLA',
      bud: 'IT2123456',
      progress: 'Warehouse A',
      member: 'TEMU123456',
    },
    {
      Title: 'TESLA',
      bud: 'IT2123456',
      progress: 'Warehouse A',
      member: 'TEMU123456',
    },
    {
      Title: 'TESLA',
      bud: 'IT2123456',
      progress: 'Warehouse A',
      member: 'TEMU123456',
    },
    {
      Title: 'TESLA',
      bud: 'IT2123456',
      progress: 'Warehouse A',
      member: 'TEMU123456',
    },
    {
      Title: 'TESLA',
      bud: 'IT2123456',
      progress: 'Warehouse A',
      member: 'TEMU123456',
    },

    {
      Title: 'TESLA',
      bud: 'IT2123456',
      progress: 'Warehouse A',
      member: 'TEMU123456',
    },
  ];

  const timelineList = [
    {
      title: 'Shipment Elaborating from Warehouse A',
      time: '09 JUN 7:20 PM',
      color: 'green',
    },
    {
      title: 'Shipment departed',
      time: '09 JUN 12:20 PM',
      color: 'green',
    },
    {
      title: 'Shipment Has reached Geofence IT34',
      time: '10 JUN 3:10 PM',
    },
    {
      title: 'Shipment Has reached Geofence IT37',
      time: '11 JUN 2:45 PM',
    },
    {
      title: 'Shipment discarge in Magazione B',
      time: '12 JUN 1:30 PM',
    },
    {
      title: 'Shipment departed from Warehouse B',
      time: '13 Jun 3:30 PM',
      color: 'gray',
    },
  ];

  return (
    <>
      <div className='layout-content'>
        <Row className='rowgap-vbox' gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className='mb-24'
            >
              <Card bordered={false} className='criclebox '>
                <div className='number'>
                  <Row align='middle' gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className='icon-box'>{c.icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className='mb-24'>
            <Card bordered={false} className='criclebox h-full'>
              <Echart />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className='mb-24'>
            <Card bordered={false} className='criclebox h-full'>
              <LineChart />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={16} className='mb-24'>
            <Card bordered={false} className='criclebox cardbody h-full'>
              <div className='project-ant'>
                <div>
                  <Title level={5}>Todays</Title>
                  <Paragraph className='lastweek'>
                    Product inbound Today
                  </Paragraph>
                </div>
              </div>
              <div className='ant-list-box table-responsive'>
                <table className='width-100'>
                  <thead>
                    <tr>
                      <th>COMPANIES</th>
                      <th>Container</th>
                      <th>Shipment N</th>
                      <th>Warehouse Destination</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((d, index) => (
                      <tr key={index}>
                        <td>
                          <h6>
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className='text-xs font-weight-bold'>
                            {d.bud}{' '}
                          </span>
                        </td>
                        <td>
                          <div className='percent-progress'>{d.progress}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8} className='mb-24'>
            <Card bordered={false} className='criclebox h-full'>
              <div className='timeline-box'>
                <Title level={5}>Orders History</Title>
                <Paragraph className='lastweek' style={{ marginBottom: 24 }}>
                  Shipment <span className='bnb2'>IT2123456</span>
                </Paragraph>

                <Timeline
                  pending='Recording...'
                  className='timelinelist'
                  reverse={reverse}
                >
                  {timelineList.map((t, index) => (
                    <Timeline.Item color={t.color} key={index}>
                      <Title level={5}>{t.title}</Title>
                      <Text>{t.time}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
                <Button
                  type='primary'
                  className='width-100'
                  onClick={() => setReverse(!reverse)}
                >
                  {<MenuUnfoldOutlined />} REVERSE
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} md={12} sm={24} lg={12} xl={14} className='mb-24'>
            <Card bordered={false} className='criclebox h-full'>
              <Row gutter>
                <Col
                  xs={24}
                  md={12}
                  sm={24}
                  lg={12}
                  xl={14}
                  className='mobile-24'
                >
                  <div className='h-full col-content p-20'>
                    <div className='ant-muse'>
                      <Text>Built by developers</Text>
                      <Title level={5}>Muse Dashboard for Ant Design</Title>
                      <Paragraph className='lastweek mb-36'>
                        From colors, cards, typography to complex elements, you
                        will find the full documentation.
                      </Paragraph>
                    </div>
                    <div className='card-footer'>
                      <a className='icon-move-right' href='#pablo'>
                        Read More
                        {<RightOutlined />}
                      </a>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={24}
                  md={12}
                  sm={24}
                  lg={12}
                  xl={10}
                  className='col-img'
                >
                  <div className='ant-cret text-right'>
                    <img src={card} alt='' className='border10' />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xs={24} md={12} sm={24} lg={12} xl={10} className='mb-24'>
            <Card bordered={false} className='criclebox card-info-2 h-full'>
              <div className='gradent h-full col-content'>
                <div className='card-content'>
                  <Title level={5}>Work with the best</Title>
                  <p>
                    Wealth creation is an evolutionarily recent positive-sum
                    game. It is all about who take the opportunity first.
                  </p>
                </div>
                <div className='card-footer'>
                  <a className='icon-move-right' href='#pablo'>
                    Read More
                    <RightOutlined />
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;