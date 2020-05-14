import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);


export default new Vuex.Store({
    state: {
        datalist: [],
    },
    mutations: {
        // 4. 收到資料改變 state
        API_SUCCESS(state, data) {
            state.datalist = data;
            console.log(data);
        }
    },
    actions: {
        actionAJAXexample({ commit }) {
            console.log(commit, "commit");
            // 2. action 發出 ajax
            fetch('https://vue-course-api.hexschool.io/api/chiaki/products', { method: 'GET' })
                .then((response) => {
                    // 3. success 後把資料丟給 mutation
                    commit('API_SUCCESS', response.json());

                })
                .then(error => {
                    console.log(error);
                })
        }
    }
});