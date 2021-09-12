import { createStore } from "vuex";

export default createStore ({
    state: {
        isMenuActive: false,
        isBurgerActive: false
    },
    mutations: {
        
    },
    getters: {
        getMenuState(state) {
            return state.isMenuActive;
        }
    }
})