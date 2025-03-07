'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { MEME_API_LINK } from '@/utlis/constants';
import { Grid, Card, Row, Col, Pagination, Image, Button } from 'antd';
import Search from 'antd/es/input/Search';
import MemeCard from '@/components/MemeCard';
import Link from 'next/link';
import "./../globals.css"

const ExplorePage = () => {
    const [filteredMeme, setFilteredMeme] = useState([])
    const [filter, setFilter] = useState('random')
    const [searchText, setSearchText] = useState("");
    const [memes, setMemes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [loading, setLoading] = useState(true);

    const [likeCounts, setLikeCounts] = useState({}); // Store like counts for each card
    const [likedStates, setLikedStates] = useState({}); // Store liked states for each card
    const [commentCounts, setCommentCounts] = useState({}); // Store comment counts
  

    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(MEME_API_LINK);
      const json = await data.json();
      setMemes(json.data.memes);
      setFilteredMeme(json.data.memes)
      setLoading(false)
    }
  
    const handleFilterChange = (value) => {
      setFilter(value);
    };

    const handleLike = (cardId) => {
      setLikedStates((prevLikedStates) => {
        const newLikedStates = { ...prevLikedStates };
        newLikedStates[cardId] = !newLikedStates[cardId];
        return newLikedStates;
      });
  
      setLikeCounts((prevLikeCounts) => {
        const newLikeCounts = { ...prevLikeCounts };
        newLikeCounts[cardId] = newLikeCounts[cardId] || 0; // Initialize if not present
        newLikeCounts[cardId] += likedStates[cardId] ? -1 : 1; // Adjust count
        return newLikeCounts;
      });
    };
  
    const handleComment = (cardId) => {
      setCommentCounts((prevCommentCounts) => {
        const newCommentCounts = { ...prevCommentCounts };
        newCommentCounts[cardId] = newCommentCounts[cardId] || 0;
        newCommentCounts[cardId]++;
        return newCommentCounts;
      });
    };
    
      useEffect(() => {
          fetchData();
      },[])

      const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        debouncedSearch(e.target.value);
      }

          // Debounce function (outside the component)
      function debounce(func, delay) {
        let timeoutId;
        return (...args) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func.apply(null, args);
          }, delay);
        };
      }


      const debouncedSearch = useCallback(
        debounce((value) => {
          // Filter memes based on search term
          if(value){
            const filteredMemes = memes.filter((meme) => meme.name.toLowerCase().includes(value.toLowerCase()))
            setMemes(filteredMemes)
          }
          else{
            setMemes(memes)
          }
        }, 300),
        [filteredMeme] // Add memes to the dependency array
      );
    
      const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
      };
    
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const currentData = memes?.slice(startIndex, endIndex);
      

  return (
    <div className='container mx-auto '>
      {/* Search bar */}
        <div className='flex justify-center items-start w-full pt-4'>
            <Search  value={searchText}
              onChange = {handleSearchChange}
              loading={loading}
              placeholder='Search here...' allowClear style={{width:"50%"}} className='m-2'/>
        </div>

        {/* Filter buttons */}
        <div>
          <Row gutter={[16,16]} style={{ width: '100%'}} className='flex justify-center w-full'> 
            <Col md={2} sm={4} xs={4}>
                {/* <Button className='trending-btn' icon={<FireTwoTone />}>Trending</Button> */}
                <button
                  className={`px-4 py-2 rounded ${filter === 'random' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition duration-300`}
                  onClick={() => handleFilterChange('random')}
                >
                  Random
                </button>
            </Col>
            <Col md={2} sm={4} xs={4}>
                <button 
                className={`px-4 py-2 rounded ${filter === 'top rated' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition duration-300`} onClick={() => handleFilterChange('top rated')}>
                  Top Rated</button>
            </Col>
            <Col md={2} sm={4} xs={4}>
               <button 
               className={`px-4 py-2 rounded ${filter === 'trending' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition duration-300`} onClick={() => handleFilterChange('trending')}>Trending</button>
            </Col>
          </Row>
        </div>

        {/* Cards Section */}
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight:'100vh' }} className='mt-7'>
            <Row gutter={[16,16]} style={{ width: '100%', maxWidth: '1200px' }}>
              {
                currentData?.map((item) => {
                  return(
                    <Col xs={24} sm={12} md={6} key={item.id}>
                        {/* <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-105">
                          <img src={item.url} alt={item.name} className="w-full h-80 object-cover"/>
                          <div className='p-4'>
                             <div className="flex items-center mb-2">
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                            </div>
                          <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center">
                                <button onClick={handleLike} className="flex items-center text-gray-600 hover:text-red-500 focus:outline-none">
                                  {isLiked ? (
                                    <HeartOutlined className="w-5 h-5 fill-red-500" />
                                  ) : (
                                    <HeartOutlined className="w-5 h-5 stroke-red-500" />
                                  )}
                                  <span className="ml-1">{likeCount}</span>
                                </button>
                                <button className="flex items-center ml-4 text-gray-600 hover:text-blue-500 focus:outline-none">
                                  <CommentOutlined className="w-5 h-5" />
                                  <span className="ml-1">{commentCount}</span>
                                </button>
                              </div>
                            </div>
                                    </div>
                          </div> */}
                          <Link href={`/meme/${item.id}`} as={`/meme/${item.id}`}>
                          <MemeCard key={item.id} {...item}        
                             isLiked={likedStates[item.id]} // Pass isLiked state
                              likeCount={likeCounts[item.id] || 0} // Pass like count
                              handleLike={() => handleLike(item.id)} // Pass handleLike function
                              commentCount={commentCounts[item.id] || 0}
                              handleComment={() => handleComment(item.id)}
                            />
                          </Link>
                     </Col>
                  )
                })
              }
            </Row>
         </div>

        <div className='py-5 mt-2'>
          <Pagination current={currentPage} align='center' className='mt-4'
          defaultCurrent={1}
            pageSize={pageSize}
            total={memes?.length}
            onChange={handlePageChange}
            />
        </div>
    </div>
  )
}

export default ExplorePage