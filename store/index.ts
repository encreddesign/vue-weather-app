import Vuex from 'vuex';
import { RootState } from './types/state';
import { renderWeatherData, populateUserKey } from './mutations';
import { fetchWeatherData } from './actions';

export const state = (): RootState => ({
  apiKey: null,
  loading: false,
  data: null,
  error: false,
  search: null
})

export const mutations = {
  renderWeatherData,
  populateUserKey
}

export const actions = {
  fetchWeatherData
}

export const getters = {}

export default function createStore() {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  });
}
