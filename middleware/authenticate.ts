/**
 * Puts api key into root state
 * @param {Context}
 */
export default async function({ app, store, redirect }) {
  const apiKey = app.$getEnv('API_KEY');

  if (apiKey === null) {
    return redirect('/problem');
  }

  store.commit('populateUserKey', apiKey);
}