import { RootResponse } from './api';

export type RootState = {
  apiKey: string | null,
  loading: boolean,
  data: RootResponse | null
}