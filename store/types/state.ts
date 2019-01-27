import { RootResponse } from './api';

export type RootState = {
  apiKey: string | null,
  loading: boolean,
  data: RootResponse | null,
  search?: string | null,
  code?: number,
  error?: boolean
}