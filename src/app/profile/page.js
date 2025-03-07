import React from 'react';
import { Card, Avatar, Typography, Row, Col, Divider, Tabs } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';


  const { TabPane } = Tabs;

function ProfilePage() {
  const user = { 
    name: "John Doe",
    bio: "Software Engineer | React Developer | Coffee Lover",
    email: "john.doe@example.com",
    phone: "+1-555-123-4567",
    website: "www.johndoe.com",
    location: "New York, USA",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqIQQWjYltw.png", // Replace with user avatar URL
  };

  const tabs = [ 
    {
      key: '1',
      label: 'Posted Memes',
      children: <h2 className='text-center'>Posted Meme Tab</h2>,
    },
    {
      key: '2',
      label: 'Liked Memes',
      children: <h2 className='text-center'>Liked MEme tab</h2>,
    },
  ];

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <Card>
        <Row gutter={16}>
          <Col xs={24} sm={8} className="text-center sm:text-left"> {/* Avatar column */}
              <Avatar size={160} src={user.avatar} icon={<UserOutlined />} />
            </Col>
            <Col xs={24} sm={16}>
                <div className="mt-4 sm:mt-0">
                  <h2 className='mb-3'>{user.name}</h2>
                  <p className='text-gray-600'>{user.bio}</p>
                  <Divider />
                  <div className='space-y-2'>
                      <p><MailOutlined className='mr-2'/>{user.email}</p>
                      <p><PhoneOutlined className='mr-2'/>{user.phone}</p>
                      {user.website && <p><GlobalOutlined className="mr-2" /> <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a></p>}
                      {user.location && <p><UserOutlined className="mr-2" /> {user.location}</p>}
                  </div>
                </div>
            </Col>
        </Row>
      </Card>

      <div className="mt-8">
        <Card className="shadow-lg rounded-lg">
          <Tabs defaultActiveKey='1' centered items={tabs}>
          </Tabs>
        </Card>
      </div>
    </div>

  );
}

export default ProfilePage;