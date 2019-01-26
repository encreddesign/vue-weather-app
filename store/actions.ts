import { QueryParams, ApiData } from './types/api';
import { queryString } from './helpers/index';

/**
 * Fetches weather data from api
 * @param {Function} commit
 * @param {QueryParams} params 
 */
export async function fetchWeatherData({ commit }, params: QueryParams) {
  const formattedParams: QueryParams = params;

  formattedParams.appid = this.$getEnv('API_KEY');

  const apiUrl = `?${queryString(formattedParams)}`;

  try {
    const response = await this.$axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    commit('renderWeatherData', <ApiData>{
      code: response.status,
      data: response
    });
  } catch (ex) {
    commit('renderWeatherData', <ApiData> {
      code: ex.response.status,
      data: ex.response,
      error: true
    });
  }
}