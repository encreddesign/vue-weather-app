import { ApiData } from './types/api';
import { RootState } from './types/state';

export const renderWeatherData = (state: RootState, data: ApiData) => {
  setTimeout(() => {
    state.loading = false;
    state.data = data.data;
    state.code = data.code;
    state.error = data.error;
  }, 500);
}

export const populateUserKey = (state: RootState, key: string) => {
  state.apiKey = key;
}