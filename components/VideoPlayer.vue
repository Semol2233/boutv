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
            src:
              "https://beta-cdn.appv.jagobd.com:444/cZMLmVyX3RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/somoyt000011226615544544.stream/playlist.m3u8"
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