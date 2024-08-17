import { useEffect, useState } from 'react';
import { ImageType } from '@/types/imageTypes';


const { VITE_API_URL: API_URL, VITE_UNSPLASH_KEY: KEY } = import.meta.env

export const useGetImages = () => {
  const [randomImgs, setRandomImgs] = useState<ImageType[]>([]);
  const [isLoading, setIsLoading] = useState(false)

  const fetchRandomImages = async () => {
    setIsLoading(true)

    try {
      const res = await fetch(`${API_URL}/photos/random/?count=4`, {
        headers: {
          'method': 'GET',
          'Authorization': `Client-ID ${KEY}`
        }
      })
      const data = await res.json()
      setRandomImgs(data)
    } catch (error: any) {
      console.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomImages()
  }, [])

  return {
    randomImgs,
    isLoading
  }
}


