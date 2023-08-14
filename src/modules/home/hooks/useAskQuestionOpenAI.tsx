import { useState } from 'react';
import { requestCompletion } from '../../../services/openAI.service';
import { OpenAIChatMessage, Model } from '../../../interfaces/openAI/openAI';

export const useAskQuestionOpenAI = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<OpenAIChatMessage>();
  const [loading, setLoading] = useState<boolean>(false);

  const askQuestion = async (model: Model) => {
    try {
      setLoading(true);
      const response = await requestCompletion({
        model: model,
        messages: [{ role: "user", content: question }],
        max_tokens: 1000,
        temperature: 0.7,
      })

      setAnswer({ ...response.data.choices[0].message, time: response.data.created });
      setLoading(false);
    } catch (error) {
      console.error('Error asking question:', error);
      setLoading(false);
    }
  };

  return { question, setQuestion, answer, loading, askQuestion };
};
