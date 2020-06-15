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
const isProduction = process.env.NODE_ENV === "production";
export default {
  name: "live",
  components: {},
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
    onTimeupdate(e) {}
  }
};
</script>

<style scoped>
.liveView {
  position: relative;
}
</style>