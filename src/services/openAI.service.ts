/* eslint-disable @typescript-eslint/no-explicit-any */
import { request } from '../data/api/request';
import { OpenAIStreamingParams } from '../interfaces/openAI/openAI';

export const getModelList = () =>  request<any>('get', '/models');

export const requestCompletion = (data: OpenAIStreamingParams) =>  request<any>('post', '/chat/completions', data);
