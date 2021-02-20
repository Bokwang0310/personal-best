import Vue from "vue";
import Vuex from "vuex";

import { Scrambow } from "scrambow";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPlaying: false,
    scramble: new Scrambow().get(1)[0].scramble_string,
    isSideBarShow: false
  },
  mutations: {
    makeNewScramble(state) {
      state.scramble = new Scrambow().get(1)[0].scramble_string;
    },
    setPlayingState(state, newState) {
      state.isPlaying = newState;
    },
    setSideBarState(state, newState) {
      state.isSideBarShow = newState;
    },
    toggleSideBar(state) {
      state.isSideBarShow = state.isSideBarShow ? false : true;
    }
  }
});
