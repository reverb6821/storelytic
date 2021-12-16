import {
  Card,
  Col,
  Row,
  Typography
} from 'antd';

import Echart from '../Components/Chart/EChart';
import LineChart from '../Components/Chart/LineChart';

import { TruckLoading } from '@styled-icons/fa-solid'
import { PackageIcon, PackageDependencies, PackageDependents } from '@styled-icons/octicons'

function Home() {
  const { Title } = Typography;
  
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
      </div>
    </>
  );
}

export default Home;