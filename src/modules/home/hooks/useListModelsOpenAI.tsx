import { useEffect, useState } from 'react';
import { getModelList } from '../../../services/openAI.service';

export const useListModelsOpenAI = () => {
  const [models, setModels] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getModelList()
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
