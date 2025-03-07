'use client'
import { CalendarOutlined, DoubleRightOutlined, FireOutlined, PlusOutlined, StopOutlined } from '@ant-design/icons'
import { Card, Button, Typography, Row,Col } from 'antd'
import { popular_category_data } from '@/utlis/constants'
import useGetMeme from '@/utlis/useGetMeme';
import Link from 'next/link';

const {Meta} = Card;

const Home = () => {
    const {memesDetail} = useGetMeme();
  return (
    <div className='dark:bg-gray-800 bg-color-800'>
        <div className='container'> 
            <section className='container h-100 bg-(--gray-color)'>
                <div className='flex h-80 flex-col flex-wrap items-center justify-center mx-auto md:flex-col'>
                     <h2 className='font-bold text-5xl font-sans p-2 text-wrap'>Discover the <span className='italic text-yellow-500'> Funniest </span> Memes Online</h2>
                      <p className='text-xl text-gray-800 text-center p-2'>Browse thousands of viral memes, create your own, and share with friends. <br />
                         Join the fastest growing meme community on the web.</p>
                      <div className='p-2'>
                        <Button className='mx-4' icon={<DoubleRightOutlined />} iconPosition='end' >Explore More</Button>
                        <Button icon={<PlusOutlined />} iconPosition='end'>Create New</Button>
                      </div>
                </div>
            </section>

            {/* Popular category section */}
            <section className='py-12 mx-auto px-8 bg-white dark:bg-gray-800 transition-colors duration-300'>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center' style={{opacity:'1', transform:'none'}}>Popular categories</h2>
              <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center' style={{opacity: '1', transform:'none'}}>Find exactly what you are looking for with our curated meme categories</p>
                <div className='flex items-center justify-center'>
                <Row className='' gutter={[16,16]} style={{ width: '100%', maxWidth: '100%' }}>
                  {
                    popular_category_data.map((item) => {
                      return(
                      <Col md={6} sm={12} xs={24}  key={item.id} className='p-6'>
                        <div className='bg-gray-100 dark:bg-gray-700 rounded-xl p-6 text-center cursor-pointer hover:shadow-md transition-shadow'>
                            <div className='flex flex-col justify-center items-center'>
                              {item.icon}  
                              <h2 className='text-bold font-medium text-gray-900'>{item.title}</h2>
                            </div>
                            <p className='font-sm text-gray-500 text-center'>{item.description}</p>
                        </div>
                      </Col>
                      )
                    })
                  }
                
              </Row>
                </div>
            </section>

            {/* Trending now section */}
            <section className='bg-gray-200 py-12 bg-white dark:bg-gray-900 transition-colors duration-300'>
                <h2 className='text-2xl mb-2 font-bold text-gray-900 dark:text-white text-center'>Trending Now <FireOutlined style={{color:'red'}}/></h2>
                 <Row gutter={[16, 16]} className="p-4" style={{ width: '100%', maxWidth: '100%' }}>
                  {
                    memesDetail?.slice(0,4).map((item) => {
                      return(
                        <Col xs={24} sm={12} md={6} lg={6} key={item.id}> {/* Responsive columns */}
                          <Card
                            cover={<img alt={item.name} src={item.url} className="w-full h-80 object-cover"/>}
                            className="shadow-md rounded-lg overflow-hidden transition duration-300 hover:scale-105"
                          >
                            <Card.Meta title={item.name} />
                          </Card>
                        </Col>
                      )
                    })
                  }
                <Button className='btn mx-auto w-fit mt-3' icon={<DoubleRightOutlined/>} iconPosition='end'><Link href={"/explore"}>View All</Link></Button>
                </Row>
            </section>

            {/* newsletter section */}
            <div className='bg-gray-400 relative isolate overflow-hidden dark:bg-gray-800 py-16 sm:py-24 lg:py-32'>
              <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                  <div className='max-w-xl lg:max-w-lg'>
                  <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">Subscribe to your happiness</h2>
                    <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
                      Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                      dolore.
                    </p>
                    <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                  </div>
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div className="flex flex-col items-start">
                      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <CalendarOutlined aria-hidden="true" style={{color:"white"}} className="size-6" />
                      </div>
                      <dt className="mt-4 text-base font-semibold text-gray-900 dark:text-white">Weekly memes</dt>
                      <dd className="mt-2 text-base/7 text-gray-800 dark:text-gray-400">
                        Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                      </dd>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <StopOutlined aria-hidden="true" className="size-6" style={{color:"white"}} />
                      </div>
                      <dt className="mt-4 text-base font-semibold text-gray-900 dark:text-white">No spam</dt>
                      <dd className="mt-2 text-base/7 text-gray-800 dark:text-gray-400">
                        Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                      </dd>
                    </div>
                  </dl>
                  </div>
                </div>
                  <div>

              </div>

            </div>

        </div>
    </div>
  )
}

export default Home