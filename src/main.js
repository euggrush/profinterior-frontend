import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import {
    store
} from './store'

import axios from "axios";

import globalMixin from "./globalMixin"

axios.interceptors.request.use(
    (config) => {
        const token = store.state.token;
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });

createApp(App).mixin(globalMixin).use(store).use(router).mount('#app')