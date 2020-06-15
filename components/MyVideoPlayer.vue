<template>
  <div></div>
  <!-- <div class="player">
    <video-player
      ref="videoPlayer"
      class="vjs-custom-skin"
      :options="playerOptions"
      @play="onPlayerPlay($event)"
      @ready="onPlayerReady($event)"
    >
    </video-player>
  </div> -->
</template>

<script>
// import { videoPlayer } from "vue-videojs7";
export default {
  components: {
    // videoPlayer
  },
  data() {
    return {
      // playerOptions: {
      //   autoplay: false,
      //   controls: true,
      //   controlBar: {
      //     timeDivider: false,
      //     durationDisplay: false
      //   },
      //   poster: "../static/logore-1.png"
      // }
    };
  },
  computed: {
    // player() {
    //   return this.$refs.videoPlayer.player;
    // }
  },
  methods: {
    // onPlayerPlay(player) {
    //   console.log("player play!", player);
    // },
    // onPlayerReady(player) {
    //   console.log("player ready!", player);
    //   this.player.play();
    // },
    // playVideo: function(source) {
    //   const video = {
    //     withCredentials: false,
    //     type: "application/x-mpegurl",
    //     src: source
    //   };
    //   this.player.reset();
    //   this.player.src(video);
    //   this.player.play();
    // }
  }
  // mounted() {
  //   const src =
  //     "https://beta-cdn.appv.jagobd.com:444/cZMLmVyX3RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/somoyt000011226615544544.stream/playlist.m3u8";
  //   this.playVideo(src);
  // }
};
</script>

<style scoped>
.player {
  position: absolute !important;
  width: 100%;
  height: 100%;
}
.vjs-custom-skin {
  height: 100% !important;
}

/* .vjs-custom-skin /deep/ .video-js {
  height: 84%;
} */
</style>
