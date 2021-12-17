import {
    Row,
    Col,
    Table,
    Button,
    Typography,
  } from 'antd';

  import { NavLink } from 'react-router-dom';

  const { Title } = Typography;

  const columns = [
    {
      title: 'Serial Number',
      dataIndex: 'serialnumber',
      key: 'serialnumber',
      width: '32%',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: 'Warehouse',
      key: 'warehouse',
      dataIndex: 'warehouse',
    },
  ];

  const data = [
    {
      key: '1',
      serialnumber: (
        <>
            <div className='avatar-info'>
              <Title level={5}>TAU345346534</Title>
            </div>
        </>
      ),
      quantity: (
        <>
          <div className='author-info'>
            <span>5</span>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button type='primary' className='tag-primary'>
            INBOUND
          </Button>
        </>
      ),
      warehouse: (
        <>
          <div className='ant-employed'>
          <Title level={5}>5</Title>
          <NavLink to='/productinfo:id'>
            <a href="#">INFO</a>
          </NavLink>
          </div>
        </>
      ),
    },
    {
      key: '2',
      serialnumber: (
        <>
            <div className='avatar-info'>
              <Title level={5}>IT546547657</Title>
            </div>
        </>
      ),
      quantity: (
        <>
          <div className='author-info'>
            <span>3</span>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button className='tag-badge'>OUTBOUND</Button>
        </>
      ),
      warehouse: (
        <>
          <div className='ant-employed'>
          <Title level={5}>M</Title>
          <NavLink to='/productinfo:id'>
            <a href="#">INFO</a>
          </NavLink>
          </div>
        </>
      ),
    },
    {
      key: '3',
      serialnumber: (
        <>
            <div className='avatar-info'>
              <Title level={5}>UK67546789</Title>
            </div>
        </>
      ),
      quantity: (
        <>
          <div className='author-info'>
            <span>3</span>
          </div>
        </>
      ),
      status: (
        <>
          <Button type='primary' className='tag-primary'>
            ONLINE
          </Button>
        </>
      ),
      warehouse: (
        <>
          <div className='ant-employed'>
          <Title level={5}>C</Title>
          <NavLink to='/productinfo:id'>
            <a href="#">INFO</a>
          </NavLink>
          </div>
        </>
      ),
    },
    {
      key: '4',
      serialnumber: (
        <>
            <div className='avatar-info'>
              <Title level={5}>DEHAM45636456</Title>
            </div>
        </>
      ),
      quantity: (
        <>
          <div className='author-info'>
            <span>768</span>
          </div>
        </>
      ),
      status: (
        <>
          <Button type='primary' className='tag-primary'>
            INBOUND
          </Button>
        </>
      ),
      warehouse: (
        <>
          <div className='ant-employed'>
          <Title level={5}>F</Title>
          <NavLink to='/productinfo:id'>
            <a href="#">INFO</a>
          </NavLink>
          </div>
        </>
      ),
    },
    {
      key: '5',
      serialnumber: (
        <>
            <div className='avatar-info'>
              <Title level={5}>CZC5634564</Title>
            </div>   
        </>
      ),
      quantity: (
        <>
          <div className='author-info'>
            <span>78</span>
          </div>
        </>
      ),
      status: (
        <>
          <Button className='tag-badge'>OUTBOUND</Button>
        </>
      ),
      warehouse: (
        <>
          <div className='ant-employed'>
          <Title level={5}>A</Title>
          <NavLink to='/productinfo:id'>
            <a href="#">INFO</a>
          </NavLink>
          </div>
        </>
      ),
    },
    {
      key: '6',
      serialnumber: (
        <>
            <div className='avatar-info'>
              <Title level={5}>FG45343456</Title>
            </div>
        </>
      ),
      quantity: (
        <>
          <div className='author-info'>
            <span>5436</span>
          </div>
        </>
      ),
      status: (
        <>
          <Button className='tag-badge'>OUTBOUND</Button>
        </>
      ),
      warehouse: (
        <>
          <div className='ant-employed'>
          <Title level={5}>F</Title>
          <NavLink to='/productinfo:id'>
            <a href="#">INFO</a>
          </NavLink>
         
          </div>
        </>
      ),
    },
  ];

  function Products() {

    return (
      <>
        <div className='tabled'>
          <Row gutter={[24, 0]}>
            <Col xs='24' xl={24}>
                <div className='table-responsive'>
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={true}
                    className='ant-border-space'
                  />
                </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  
  export default Products;