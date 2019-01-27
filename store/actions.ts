import { QueryParams, ApiData } from './types/api';
import { queryString } from './helpers/index';

/**
 * Fetches weather data from api
 * @param {Function} commit
 * @param {QueryParams} params 
 */
export async function fetchWeatherData({ commit, state }, params: QueryParams) {
  const apiUrl = `?${queryString(params)}`;

  state.loading = true;

  if (params.q) {
    state.search = params.q;
  }

  try {
    const response = await this.$axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    commit('renderWeatherData', <ApiData>{
      code: response.status,
      data: response.data
    });
  } catch (ex) {
    commit('renderWeatherData', <ApiData> {
      code: ex.response.status,
      data: ex.response.message,
      error: true
    });
  }
}