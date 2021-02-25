<template>
  <section class="time" :style="timeStyle">
    {{ timeStr }}
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "StopWatch",
  data() {
    return {
      time: {
        hour: 0,
        min: 0,
        sec: 0,
        msec: 0
      },
      isPressed: false,
      isReady: false,
      timeStyle: {
        color: "#000000"
      },
      timeout: null,
      interval: null,
      canReady: true
    };
  },
  computed: {
    timeStr() {
      const msec = normalizeTime(this.time.msec);
      const sec = normalizeTime(this.time.sec);

      if (this.time.min === 0) {
        return `${sec}.${msec}`;
      }

      const min = normalizeTime(this.time.min);
      if (this.time.hour === 0) {
        return `${min}:${sec}.${msec}`;
      }

      return `${this.time.hour}:${min}:${sec}.${msec}`;
    },
    ...mapState(["isPlaying", "isSideBarShow"])
  },
  methods: {
    setTimeColor(color) {
      this.timeStyle = Object.assign({}, this.timeStyle, { color });
    },
    resetTimer() {
      this.time = Object.assign({}, this.time, {
        hour: 0,
        min: 0,
        sec: 0,
        msec: 0
      });
    },
    increaseTime() {
      if (this.time.msec === 99) {
        this.time.sec++;
        this.time.msec = 0;
      }
      if (this.time.sec === 60) {
        this.time.min++;
        this.time.sec = 0;
      }
      if (this.time.min === 60) {
        this.time.hour++;
        this.time.min = 0;
      }
      this.time.msec++;
    },
    checkAllow(e, touchType) {
      if (!this.canReady) return false;

      if (e.key) {
        return e.key === " ";
      }

      // ...
      if (e.type === touchType) {
        if (isTouchableArea(e)) {
          if (this.isSideBarShow) {
            if (checkSideBarPosition("relative")) return true;
            return false;
          }
          return true;
        }
        return false;
      }

      return false;
    },
    onKeyDown(e) {
      if (this.checkAllow(e, "touchstart") && this.isPlaying) {
        console.log("stop");
        this.setPlayingState(false);
        clearInterval(this.interval);
        this.makeNewScramble();
      }
      if (this.checkAllow(e, "touchstart") && !this.isReady) {
        this.setTimeColor("#F15625");
        this.isPressed = true;
        this.timeout = setTimeout(() => {
          this.isReady = true;
          this.setTimeColor("#9BF138");
        }, 300);
      }
    },
    onKeyUp(e) {
      if (
        this.isSideBarShow &&
        checkSideBarPosition("absolute") &&
        isTouchableArea(e)
      ) {
        this.setSideBarState(false);
      }

      if (this.checkAllow(e, "touchend") && this.isReady) {
        console.log("Go!");
        this.resetTimer();
        this.setPlayingState(true);
        this.interval = setInterval(this.increaseTime, 10);
      }
      if (this.checkAllow(e, "touchend")) {
        clearTimeout(this.timeout);
        this.setTimeColor("#000000");
        this.isPressed = false;
        this.isReady = false;
      }
    },
    ...mapMutations(["makeNewScramble", "setSideBarState", "setPlayingState"])
  },
  mounted() {
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);

    window.addEventListener("touchstart", this.onKeyDown);
    window.addEventListener("touchend", this.onKeyUp);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("keyup", this.onKeyUp);

    window.removeEventListener("touchstart", this.onKeyDown);
    window.removeEventListener("touchend", this.onKeyUp);
  }
};

const normalizeTime = time => (time < 10 ? `0${time}` : time);

const checkSideBarPosition = position =>
  getComputedStyle(document.querySelector(".sidebar")).position === position;

const isTouchableArea = e =>
  e.target === document.querySelector(".contents-container") ||
  e.target === document.querySelector(".scramble") ||
  e.target === document.querySelector(".time");
</script>

<style scoped>
.time {
  font-size: 13rem;
  text-align: center;
}
</style>
