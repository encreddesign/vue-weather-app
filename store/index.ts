import Vuex from 'vuex';
import { RootState } from './types/state';
import { renderWeatherData } from './mutations';
import { fetchWeatherData } from './actions';

export const state = (): RootState => ({
  apiKey: null,
  loading: false,
  data: null
})

export const mutations = {
  renderWeatherData
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
