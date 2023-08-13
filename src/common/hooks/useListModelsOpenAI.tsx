import { useEffect, useState } from 'react';
import axios from 'axios';

export const useListModelsOpenAI = () => {
  const [models, setModels] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('https://api.openai.com/v1/engines')
      .then(response => {
        setModels(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching models:', error);
        setLoading(false);
      });
  }, []);

  return { models, loading };
};
