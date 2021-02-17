import Vue from "vue";
import Vuex from "vuex";

import { Scrambow } from "scrambow";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPlaying: false,
    scramble: new Scrambow().get(1)[0].scramble_string
  },
  mutations: {
    setScramble(state, newScramble) {
      state.scramble = newScramble;
    },
    setPlayingState(state, newState) {
      state.isPlaying = newState;
    }
  }
});
