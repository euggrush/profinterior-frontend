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
  BASE_URL_API
} from '../constants.js';

export const store = new Vuex.Store({
  state: {
    categories: [],
    uploaded_file: {
      state: `no`
    },
    is_changes_needed: false,
    status: ``,
    token: ``,
    user: ``,
    my_role: ``,
    users: [],
    projects: [],
    picked_category_id: ``
  },
  plugins: [
    createLogger(),
    createPersistedState({
      paths: ['my_role', 'token', 'user', 'status'],
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
    auth_success(state, payload) {
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user;
      state.my_role = payload.role;
    },
    auth_error(state, payload) {
      state.status = payload;
    },
    logout(state) {
      state.status = ``;
      state.token = ``;
      state.user = ``;
      state.my_role = ``;
    },
    SET_GENERAL_ERRORS(state, payload) {
      if (payload.response) {
        state.general_errors = {
          data: payload.response.data,
          status: payload.response.status,
          headers: payload.response.headers
        }
      } else if (payload.request) {
        state.general_errors = {
          request: payload.request
        }
      } else {
        state.general_errors = {
          error: payload.message
        }
      }
      console.log(payload.config);
    },
    SET_CATEGORIES(state, payload) {
      state.categories = payload;
    },
    SET_NEEDED_CHANGES(state, payload) {
      const delay = (time) => {
        return new Promise((resolve, reject) => setTimeout(resolve, time))
      }
      delay(50)
        .then(() => {
          state.uploaded_file = payload;
          return delay(50)
        })
        .then(() => {
          state.is_changes_needed = !state.is_changes_needed;
          return delay(50)
        })
    },
    SET_USERS(state, payload) {
      state.users = payload
    },
    SET_PROJECTS(state, payload) {
      state.projects = payload;
    },
    SET_PICKED_CATEGORY_ID(state, payload) {
      state.picked_category_id = payload;
    }
  },
  actions: {
    // PROJECTS
    GET_PROJECTS: async (context, payload) => {
      let {
        data
      } = await Axios.get(`${BASE_URL_API}/projects${payload}`);
      context.commit(`SET_PROJECTS`, data);
    },
    CREATE_PROJECT: async (context, payload) => {
      Axios.post(`${BASE_URL_API}/projects`, payload).then(
        resp => {
          let data = resp.data;
          context.commit(`SET_NEEDED_CHANGES`, data);
        }
      ).catch((error) => {
        context.commit(`SET_GENERAL_ERRORS`, error);
      })
    },
    DELETE_PROJECT: async (context, payload) => {
      Axios.delete(`${BASE_URL_API}/projects${payload}`).catch((error) => {
        alert(`something went wrong, please try again`);
        context.commit(`SET_GENERAL_ERRORS`, error);
      })
    },
    UPLOAD_PROJECT_IMAGES: async (context, payload) => {
      Axios.post(`${BASE_URL_API}/upload?act=project&projectId=${payload.id}`, payload.asset).then(
        resp => {
          let data = resp.data;
          context.commit(`SET_NEEDED_CHANGES`, data);
        }
      ).catch((error) => {
        alert(`something went wrong, please try again`);
        context.commit(`SET_GENERAL_ERRORS`, error);
      })
    },
    DELETE_PROJECT_IMAGE: async (context, payload) => {
      Axios.delete(`${BASE_URL_API}/pictures?pictureId=${payload}`).then(
        resp => {
          let data = resp.data;
          context.commit(`SET_NEEDED_CHANGES`, data);
        }
      ).catch((error) => {
        alert(`something went wrong, please try again`);
        context.commit(`SET_GENERAL_ERRORS`, error);
      })
    },
    // CETEGORIES

    GET_CATEGORIES: async (context, payload) => {
      let {
        data
      } = await Axios.get(`${BASE_URL_API}/categories`);
      context.commit(`SET_CATEGORIES`, data);
    },
    CREATE_CATEGORY: async (context, payload) => {
      Axios.post(`${BASE_URL_API}/categories`, payload).catch((error) => {
        context.commit(`SET_GENERAL_ERRORS`, error);
      })
    },
    DELETE_CATEGORY: async (context, payload) => {
      Axios.delete(`${BASE_URL_API}/categories${payload}`).catch((error) => {
        alert(`something went wrong, please try again`);
        context.commit(`SET_GENERAL_ERRORS`, error);
      })
    },
    MODIFY_CATEGORY: async (context, payload) => {
      Axios.put(`${BASE_URL_API}/categories`, payload).catch((error) => {
        context.commit(`SET_GENERAL_ERRORS`, error);
        alert(`something went wrong, please try again`);
      })
    },
    UPLOAD_CATEGORY_PICTURE: async (context, payload) => {
      Axios.post(`${BASE_URL_API}/upload?act=category&categoryId=${payload.id}`, payload.asset).then(
        resp => {
          let data = resp.data;
          context.commit(`SET_NEEDED_CHANGES`, data);
        }
      ).catch((error) => {
        alert(`something went wrong, please try again`);
        context.commit(`SET_GENERAL_ERRORS`, error);
      })
    },
    DELETE_CATEGORY_IMAGE: async (context, payload) => {
      Axios.delete(`${BASE_URL_API}/categories?pictureId=${payload}`).catch((error) => {
        alert(`something went wrong, please try again`);
        context.commit(`SET_GENERAL_ERRORS`, error);
      })
    },

    GET_USERS: async (context, payload) => {
      let {
        data
      } = await Axios.get(`${BASE_URL_API}/user`);
      context.commit(`SET_USERS`, data);
    },

    LOGIN({
      commit
    }, payload) {
      return new Promise((resolve, reject) => {
        Axios({
            url: `${BASE_URL_API}/authorization`,
            data: payload,
            method: `POST`
          })
          .then(resp => {
            console.log(resp)
            const token = resp.data.token;
            const user = resp.data.name;
            const role = resp.data.role;
            Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            commit('auth_success', {
              token,
              user,
              role,
            });
            resolve(resp);
          })
          .catch(err => {
            commit('auth_error', err)
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