import { createStore } from "vuex";

export default createStore ({
    state: {
        isMenuActive: false
    },
    mutations: {
        
    },
    getters: {
        getMenuState(state) {
            return state.isMenuActive;
        }
    }
})