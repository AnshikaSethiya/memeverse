'use client'
import React, { useEffect } from 'react'
import {Tabs, Card, Avatar, Typography, Row, Col, Divider, Skeleton, Badge} from 'antd'
import { motion } from 'framer-motion';
import useGetMeme from '@/utlis/useGetMeme';
import { generateUniqueRandomNumbers } from '@/utlis/constants';
import { HeartFilled } from '@ant-design/icons';

    
const Leaderboard = () => {
  const {memesDetail, isLoading, error} = useGetMeme(); 
  const randomLikes = generateUniqueRandomNumbers(10);
 //console.log("likes: ", randomLikes)

  const renderMemes = (memes) => (
    <Row gutter={[16, 16]} style={{ width: '100%' }}>
      {memes?.slice(0, 10).map((meme, index) => (
        <Col xs={24} sm={12} md={8} lg={6} key={meme.id}>
          {/* <MemeCard meme={meme} memeDetail={memeDetail} isLoading={isMemeDetailLoading || loading}/> */}
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
               <Badge.Ribbon text={index+1} color='yellow' placement='start'> 
                <Card className='shadow-md' hoverable cover={
                isLoading ? (
                    <Skeleton.Image active />
                    ) : (
                        <img alt={meme.name} src={meme.url} className="w-full h-80 object-cover"/>
                    )
                        } actions={[
                            <span key="like">
                                {randomLikes[index]} <HeartFilled style={{color:'red'}}/>
                            </span>,
                        ]}>
                    {isLoading ? ( // Shimmer effect for card content
                    <Skeleton active paragraph={{ rows: 2 }} />
                ) : (
                    <Card.Meta title={meme.name} />
                )}
                </Card> 
                </Badge.Ribbon>
            </motion.div>
        </Col>
      ))}
    </Row>
  );

  const tabs=[
    {
        key: '1',
        label: 'Top Memes',
        children: isLoading ? (
            <Row gutter={[16, 16]}>
              {[...Array(10)].map((_, i) => (
                <Col xs={24} sm={12} md={8} lg={6} key={i}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Card cover={<Skeleton.Image active />} actions={[]}>
                            <Skeleton active paragraph={{ rows: 2 }} />
                        </Card>
                    </motion.div>
                </Col>
              ))}
            </Row>
          ) : error ? (
            <div>Error: {error}</div> // Display error message if any
          ) : (
            renderMemes(memesDetail)
          ),
      },
      {
        key: '2',
        label: 'Top Creators',
        // children: loading ? (
        //   <div>Loading...</div>
        // ) : (
        //   <motion.div
        //     initial={{ opacity: 0, y: 20 }}
        //     animate={{ opacity: 1, y: 0 }}
        //     transition={{ duration: 0.5, ease: "easeInOut" }}
        //   >
        //     {/* <Table dataSource={topCreators} columns={creatorColumns} pagination={false} /> */}
        //   </motion.div>
        // ),
      },
]

    return(
        <div className='container mx-auto p-4 md:p-8 bg-gray-100 dark:bg-gray-800 min-h-screen transition-colors duration-300'>
             <header className='text-center mb-2'>
                     <h1 className="text-3xl font-bold mb-2 md:mb-2 text-gray-800 dark:text-white transition-colors duration-300">
                     Leaderboard</h1>
                     <p className='text-gray-600'>Discover the top memes and top creator of week here!!</p>
             </header>
             <Card className='shadow-lg rounded-lg bg-white dark:bg-gray-900 transition-colors duration-300'>
                 <Tabs defaultActiveKey="1" items={tabs} className="text-gray-800 dark:text-white transition-colors duration-300"> 
                 </Tabs>
            </Card>
        </div>
    )
}

export default Leaderboard