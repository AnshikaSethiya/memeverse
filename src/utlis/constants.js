import { FcBullish, FcFlashOn, FcLike } from "react-icons/fc";
import { FaDice } from "react-icons/fa6";

export const MEME_API_LINK = 'https://api.imgflip.com/get_memes';

export const popular_category_data = [
    {
        id:1,
        title:'Hot',
        description:'Lorem ipsum kjkbjk jbfgjd kjsdbkjg bcggjkfbg kjdfbgkjsf kjjsdbkjdsbg kjsdbkjsdb',
        icon:<FcFlashOn style={{fontSize:'3rem'}}/>
    },
    {
        id:2,
        title:'Trending',
        description:'Lorem ipsum kjkbjk jbfgjd kjsdbkjg bcggjkfbg kjdfbgkjsf kjjsdbkjdsbg kjsdbkjsdb',
        icon:<FcBullish style={{fontSize:'3rem'}} />
    },
    {
        id:3,
        title:'Random',
        description:'Lorem ipsum kjkbjk jbfgjd kjsdbkjg bcggjkfbg kjdfbgkjsf kjjsdbkjdsbg kjsdbkjsdb',
        icon:<FaDice style={{color:'pink',fontSize:'3rem'}}/>
    },
    {
        id:4,
        title:'Most Liked',
        description:'Lorem ipsum kjkbjk jbfgjd kjsdbkjg bcggjkfbg kjdfbgkjsf kjjsdbkjdsbg kjsdbkjsdb',
        icon:<FcLike style={{fontSize:'3rem'}}/>
    },

]

export function generateUniqueRandomNumbers(count) {
    if (count <= 0) {
      return [];
    }
  
    const numbers = new Set();
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * 1000)); // Adjust the upper bound (1000) as needed
    }
  
    const sortedNumbers = Array.from(numbers).sort((a, b) => b - a);
    return sortedNumbers;
  }
  