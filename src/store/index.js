import { createStore } from "vuex";



// Create a new store instance.
const store = createStore({

    state() {
        return {
            mobileMenu: {
                isVisible: false
            },
        }
    },
    mutations: {
        toggleMobileMenu(state) {
            state.mobileMenu.isVisible = !state.mobileMenu.isVisible
          },
    },

})
export default store;
