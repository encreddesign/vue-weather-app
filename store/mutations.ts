import { RootResponse } from './types/api';
import { RootState } from './types/state';

export const renderWeatherData = (state: RootState, data: RootResponse) => {
  state.loading = false;
  state.data = data;
}

export const populateUserKey = (state: RootState, key: string) => {
  state.apiKey = key;
}