<template>
  <div class="liveView">
    <video-player
      class="vjs-custom-skin videojs"
      ref="videoPlayer"
      :options="playerOptions"
      @ready="onPlayerReadied"
      @timeupdate="onTimeupdate"
    >
    </video-player>
  </div>
</template>

<script>
// import Switcher from '@/components/Switcher'
const isProduction = process.env.NODE_ENV === "production";
export default {
  name: "live",
  components: {
    // Switcher
  },
  data() {
    return {
      initialized: false,
      playerOptions: {
        autoplay: false,
        controls: true,
        techOrder: ["flash", "html5"],
        sourceOrder: true,
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            withCredentials: false,
            type: "application/x-mpegURL",
            src: ""
          }
        ],
        poster: "~/static/brand.png"
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    onPlayerReadied() {
      if (!this.initialized) {
        this.initialized = true;
        this.currentTech = this.player.techName_;
      }
    },
    // record current time
    onTimeupdate(e) {
      // console.log("currentTime", e.cache_.currentTime);
    }
  }
};
</script>

<style scoped>
.liveView {
  position: relative;
}
.selectWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 30px;
  margin: 20px;
  vertical-align: baseline;
}
.inputWrapper {
  width: 500px;
  margin: 0 auto;
}
.buttonWrapper {
  text-align: center;
}
.vjs-custom-skin {
}
</style>