'use client'
import { useState, useEffect } from "react"
import { MEME_API_LINK } from "./constants"

const useGetMeme = () => {

    const [memesDetail, setMemesDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try {
          const data = await fetch(MEME_API_LINK); 
          const json = await data.json();
          setMemesDetail(json.data.memes);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
      

    return {memesDetail, isLoading, error};

}

export default useGetMeme;