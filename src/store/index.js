import Vue from "vue";
import Vuex from "vuex";

import { Scrambow } from "scrambow";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPlaying: false,
    scramble: null,
    isSideBarShow: false,
    selectedOption: { name: "No Record", bool: false },
    currentEvent: {
      name: "3x3x3",
      scrambleType: "333",
      icon: "event-333"
    }
  },
  mutations: {
    makeNewScramble(state) {
      state.scramble = new Scrambow(state.currentEvent.scrambleType).get(
        1
      )[0].scramble_string;
    },
    setPlayingState(state, payload) {
      state.isPlaying = payload;
    },
    setSideBarState(state, payload) {
      state.isSideBarShow = payload;
    },
    toggleSideBar(state) {
      state.isSideBarShow = state.isSideBarShow ? false : true;
    },
    setSelectedOption(state, payload) {
      state.selectedOption = payload;
    },
    setCurrentEvent(state, event) {
      state.currentEvent = getEvent(event);
    }
  }
});

const eventTable = {
  "333": { name: "3x3x3", scrambleType: "333", icon: "event-333" },
  "222": { name: "2x2x2", scrambleType: "222", icon: "event-222" },
  "444": { name: "4x4x4", scrambleType: "444", icon: "event-444" }
};
const getEvent = name => eventTable[name];
getEvent;
