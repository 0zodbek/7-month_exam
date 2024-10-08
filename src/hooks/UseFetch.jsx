import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true); 
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Serverdan ma\'lumot olishda xatolik');
          }
          const result = await response.json();
          setData(result); 
          setError(null); 
        } catch (err) {
          setError(err.message); 
          setData(null);       
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
    return { data, loading, error }; 
  
}

export default useFetch