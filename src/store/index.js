/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import Vuex from 'vuex';
import Axios from 'axios';
import {
  createLogger
} from 'vuex';

import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
let ls = new SecureLS({
  encodingType: "aes",
  isCompression: false,
  encryptionSecret: "Your key"
});

import {
  BASE_URL
} from '../constants.js';

// import CATEGORIES from '../../public/data/categories.json';

export const store = new Vuex.Store({
  state: {
    categories: []
  },
  plugins: [
    createLogger(),
    createPersistedState({
      paths: ['categories'],
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) =>
          ls.set(key, value, {
            expires: 7
          }),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  mutations: {
    SET_CATEGORIES(state, payload) {
      state.categories = payload;
    }
  },
  actions: {
    GET_CATEGORIES: async (context, payload) => {
      let url = `../../public/data/categories.json`;

      let categories = []
      await fetch(url).then((r) => {
        console.log(JSON.parse(r))
      })
      // context.commit('SET_CATEGORIES', categories);
    },
    LOGIN({
      commit
    }, payload) {
      return new Promise((resolve, reject) => {
        Axios({
            url: `${BASE_URL}/authorization`,
            data: payload,
            method: `POST`
          })
          .then(resp => {

            const token = resp.data.token;
            const tokenExpirationTime = resp.data.tokenExpirationTime;
            const user = resp.data;
            const role = resp.data.role;
            Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            commit('auth_success', {
              token,
              user,
              role,
              tokenExpirationTime
            });
            commit(`SET_ORDERS`, []);
            resolve(resp);
          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
      })
    },
    LOGOUT({
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        delete Axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
  },
});