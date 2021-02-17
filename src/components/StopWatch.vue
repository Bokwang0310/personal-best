<template>
  <div class="time" :style="timeStyle">
    {{ timeStr }}
  </div>
</template>

<script>
import { Scrambow } from "scrambow";

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
      interval: null
    };
  },
  computed: {
    isPlaying() {
      return this.$store.state.isPlaying;
    },
    timeStr() {
      const msec = this.time.msec < 10 ? `0${this.time.msec}` : this.time.msec;
      if (this.time.min === 0) {
        return `${this.time.sec}.${msec}`;
      } else if (this.time.hour === 0) {
        return `${this.time.min}:${this.time.sec}.${msec}`;
      } else {
        return `${this.time.hour}:${this.time.min}:${this.time.sec}.${msec}`;
      }
    }
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
      if (e.key) {
        return e.key === " ";
      } else if (e.type === touchType) {
        return true;
      } else {
        return false;
      }
    },
    onKeyDown(e) {
      if (this.checkAllow(e, "touchstart") && this.isPlaying) {
        console.log("stop");
        this.$store.commit("setPlayingState", false);
        clearInterval(this.interval);
        this.$store.commit(
          "setScramble",
          new Scrambow().get(1)[0].scramble_string
        );
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
      if (this.checkAllow(e, "touchend") && this.isReady) {
        console.log("Go!");
        this.resetTimer();
        this.$store.commit("setPlayingState", true);
        this.interval = setInterval(this.increaseTime, 10);
      }
      if (this.checkAllow(e, "touchend")) {
        clearTimeout(this.timeout);
        this.setTimeColor("#000000");
        this.isPressed = false;
        this.isReady = false;
      }
    }
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
</script>

<style scoped>
.time {
  font-size: 22vmin;
  /* 20rem */
  text-align: center;
}
</style>
