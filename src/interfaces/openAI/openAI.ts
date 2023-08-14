export type GPT35Model = 'gpt-3.5-turbo' | 'gpt-3.5-turbo-0301' | string;

export type OpenAIChatRole = 'user' | 'assistant' | 'system' | '';

export type Model = GPT35Model;

export interface OpenAIChatMessage {
  content: string;
  role: OpenAIChatRole;
  time?: string;
}

export interface OpenAIStreamingParams {
  model: Model;
  temperature?: number;
  messages: OpenAIChatMessage[];
  max_tokens?: number;
}


export interface ChatType {
  name: string;
  time?: string;
  showConfirm?: boolean;
}

export interface ChatState {
  history: ChatType[];
  conversation: OpenAIChatMessage[];
  model: Model;
  temperature: number;
}

export interface UserState {
  username: string;
  hiddenSidebar: boolean;
  showSettingDrawer: boolean;
}
