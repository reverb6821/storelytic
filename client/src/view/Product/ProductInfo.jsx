import {
    Row,
    Col,
    Card,
    Button,
    List,
    Descriptions,
} from 'antd';

function ProductInfo() {
    const data = [
      {
        title: 'March, 01, 2021',
        description: '#MS-415646',
        amount: '$180',
      },
      {
        title: 'February, 12, 2021',
        description: '#RV-126749',
        amount: '$250',
      },
      {
        title: 'April, 05, 2020',
        description: '#FB-212562',
        amount: '$550',
      },
      {
        title: 'June, 25, 2019',
        description: '#QW-103578',
        amount: '$400',
      },
      {
        title: 'March, 03, 2019',
        description: '#AR-803481',
        amount: '$700',
      },
    ];

    const information = [
        {
          title: 'Oliver Liam',
          description: 'Viking Burrito',
          address: 'oliver@burrito.com',
          vat: 'FRB1235476',
        },
        {
          title: 'Lucas Harper',
          description: 'Stone Tech Zone',
          address: 'lucas@syone-tech.com',
          vat: 'FRB1235476',
        },
        {
          title: 'Oliver Liam',
          description: 'ethan@fiber.com',
          vat: 'NumberFRB1235476',
        },
      ];

    return (
    <>
     <Row gutter={[24, 0]}>
     <Col span={24} md={16} className='mb-24'>
          <Card
            className='header-solid h-full'
            bordered={false}
            title={[<h6 className='font-semibold m-0'>Billing Information</h6>]}
            bodyStyle={{ paddingTop: '0' }}
          >
            <Row gutter={[24, 24]}>
              {information.map((i, index) => (
                <Col span={24} key={index}>
                  <Card className='card-billing-info' bordered='false'>
                    <div className='col-info'>
                      <Descriptions title='Oliver Liam'>
                        <Descriptions.Item label='Company Name' span={3}>
                          Viking Burrito
                        </Descriptions.Item>

                        <Descriptions.Item label='Email Address' span={3}>
                          oliver@burrito.com
                        </Descriptions.Item>
                        <Descriptions.Item label='VAT Number' span={3}>
                          FRB1235476
                        </Descriptions.Item>
                      </Descriptions>
                    </div>
                    <div className='col-action'>
                      <Button type='link' danger>
                        DELETE
                      </Button>
                      <Button type='link' className='darkbtn'>
                        EDIT
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
        <Col span={24} md={8} className='mb-24'>
          <Card
            bordered={false}
            className='header-solid h-full ant-invoice-card'
            title={[<h6 className='font-semibold m-0'>Invoices</h6>]}
            extra={[
              <Button type='primary'>
                <span>VIEW ALL</span>
              </Button>,
            ]}
          >
            <List
              itemLayout='horizontal'
              className='invoice-list'
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  actions={[<Button type='link'> PDF</Button>]}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                  <div className='amount'>{item.amount}</div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductInfo;